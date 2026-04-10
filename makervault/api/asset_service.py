import json
from pathlib import Path
from typing import List, Optional
from zipfile import BadZipFile, ZipFile

from fastapi import HTTPException
from PIL import Image
from sqlmodel import Session, select

from config import IMPORT_MAX_BYTES
from db import STORAGE, THUMBS, engine
from file_utils import build_import_filename, mime_from_content_type
from models import Asset
from schemas import ImportRequest


def asset_dir(asset_id: str) -> Path:
    p = STORAGE / asset_id
    p.mkdir(parents=True, exist_ok=True)
    return p


def asset_path(asset_id: str, name: str) -> Path:
    return asset_dir(asset_id) / name


def save_thumb(asset_id: str, src: Path) -> Optional[str]:
    try:
        thumb = THUMBS / f"{asset_id}.jpg"
        with Image.open(src) as im:
            im = im.convert("RGB")
            im.thumbnail((512, 512))
            im.save(thumb, quality=88)
        return f"/thumb/{asset_id}.jpg"
    except Exception:
        return None


# Embedded thumbnails Bambu Studio / PrusaSlicer / OrcaSlicer write into the
# 3MF zip, in priority order. plate_1 is the first plate of a Bambu project.
_THREEMF_THUMB_CANDIDATES = (
    "Metadata/plate_1.png",
    "Metadata/plate.png",
    "Metadata/thumbnail.png",
    "Metadata/thumbnail_middle.png",
    "Metadata/thumbnail_small.png",
)


def extract_3mf_thumbnail(asset_id: str, src: Path) -> Optional[str]:
    try:
        with ZipFile(src) as zf:
            names = zf.namelist()
            name_set = set(names)
            chosen = next((c for c in _THREEMF_THUMB_CANDIDATES if c in name_set), None)
            if chosen is None:
                plates = sorted(
                    n for n in names
                    if n.lower().startswith("metadata/plate_") and n.lower().endswith(".png")
                )
                chosen = plates[0] if plates else None
            if chosen is None:
                return None
            thumb = THUMBS / f"{asset_id}.jpg"
            with zf.open(chosen) as fh, Image.open(fh) as im:
                im = im.convert("RGB")
                im.thumbnail((512, 512))
                im.save(thumb, quality=88)
        return f"/thumb/{asset_id}.jpg"
    except (BadZipFile, KeyError, OSError, ValueError):
        return None
    except Exception:
        return None


def generate_thumbnail(asset_id: str, src: Path, mime: Optional[str]) -> Optional[str]:
    """Pick the right thumbnail strategy based on file type."""
    suffix = src.suffix.lower()
    if (mime or "").lower().startswith("image/") and suffix in {".png", ".jpg", ".jpeg", ".webp", ".bmp"}:
        return save_thumb(asset_id, src)
    if suffix == ".3mf":
        return extract_3mf_thumbnail(asset_id, src)
    return None


def backfill_3mf_thumbnails() -> int:
    """One-shot pass to populate thumbnails for existing 3MF assets that lack one."""
    count = 0
    try:
        with Session(engine) as s:
            rows = list(s.exec(select(Asset).where(Asset.filename.like("%.3mf"))))
    except Exception:
        return 0
    for a in rows:
        try:
            if (THUMBS / f"{a.id}.jpg").exists():
                continue
            src = STORAGE / a.id / a.filename
            if not src.exists() and a.source_path:
                src = Path(a.source_path)
            if not src.exists():
                continue
            if extract_3mf_thumbnail(a.id, src):
                count += 1
        except Exception:
            continue
    return count


def create_asset_record(
    filename: str,
    mime: str,
    title: Optional[str],
    notes: Optional[str],
    tags: List[str],
    folder_id: Optional[str],
    source_path: Optional[str] = None,
) -> Asset:
    asset = Asset(
        filename=filename,
        mime=mime,
        size=0,
        title=title,
        notes=notes,
        tags_json=json.dumps([t.strip() for t in tags if t.strip()]),
        folder_id=folder_id,
        source_path=source_path,
    )
    with Session(engine) as s:
        s.add(asset)
        s.commit()
        s.refresh(asset)
    return asset


def finalize_asset_record(asset_id: str, size: int, mime: Optional[str] = None) -> Optional[Asset]:
    with Session(engine) as s:
        db_a = s.get(Asset, asset_id)
        if not db_a:
            return None
        db_a.size = size
        if mime:
            db_a.mime = mime
        s.add(db_a)
        s.commit()
        s.refresh(db_a)
        return db_a


def cleanup_asset(asset_id: str) -> None:
    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if a:
            s.delete(a)
            s.commit()
    try:
        ap = STORAGE / asset_id
        if ap.exists():
            for child in ap.iterdir():
                child.unlink(missing_ok=True)
            ap.rmdir()
        (THUMBS / f"{asset_id}.jpg").unlink(missing_ok=True)
    except Exception:
        pass


def stream_response_to_file(resp, dest: Path) -> int:
    size = 0
    with open(dest, "wb") as f:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            size += len(chunk)
            if size > IMPORT_MAX_BYTES:
                raise HTTPException(status_code=413, detail="Imported file exceeds size limit")
            f.write(chunk)
    return size


def persist_asset_from_response(resp, final_url: str, body: ImportRequest) -> Asset:
    content_length = resp.headers.get("Content-Length")
    if content_length:
        try:
            if int(content_length) > IMPORT_MAX_BYTES:
                raise HTTPException(status_code=413, detail="Imported file exceeds size limit")
        except ValueError:
            pass

    filename = build_import_filename(final_url, resp.headers, body.filename)
    mime = mime_from_content_type(resp.headers.get("Content-Type", ""), filename)
    asset = create_asset_record(filename, mime, body.title, body.notes, body.tags, body.folder_id)
    dest = asset_path(asset.id, asset.filename)
    try:
        size = stream_response_to_file(resp, dest)
        generate_thumbnail(asset.id, dest, mime)
        refreshed = finalize_asset_record(asset.id, size, mime)
        return refreshed or asset
    except HTTPException:
        cleanup_asset(asset.id)
        raise
    except Exception as exc:
        cleanup_asset(asset.id)
        raise HTTPException(status_code=500, detail=f"Import failed: {exc}")
