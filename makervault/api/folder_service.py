from typing import Optional

from fastapi import HTTPException
from sqlmodel import Session

from models import Folder


def validate_parent_folder(session: Session, parent_id: Optional[str], folder_id: Optional[str] = None) -> Optional[str]:
    """Ensure a parent folder exists and does not introduce cycles."""
    if not parent_id:
        return None
    parent = session.get(Folder, parent_id)
    if not parent:
        raise HTTPException(status_code=400, detail="Parent folder not found")
    if folder_id and parent_id == folder_id:
        raise HTTPException(status_code=400, detail="Folder cannot be its own parent")

    ancestor = parent
    visited = set([folder_id]) if folder_id else set()
    while ancestor and ancestor.parent_id:
        if ancestor.parent_id in visited:
            raise HTTPException(status_code=400, detail="Invalid parent: would create a cycle")
        if folder_id and ancestor.parent_id == folder_id:
            raise HTTPException(status_code=400, detail="Invalid parent: would create a cycle")
        visited.add(ancestor.parent_id)
        ancestor = session.get(Folder, ancestor.parent_id)
    return parent_id
