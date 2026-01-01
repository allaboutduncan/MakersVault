import os


def env_int(name: str, default: int) -> int:
    try:
        value = os.getenv(name)
        return default if value is None else int(value)
    except (TypeError, ValueError):
        return default


def env_bool(name: str, default: bool) -> bool:
    raw = os.getenv(name)
    if raw is None:
        return default
    return raw.strip().lower() in {"1", "true", "yes", "y", "on"}


IMPORT_ALLOWED_EXTS = {".stl", ".3mf", ".step", ".stp", ".zip"}
IMPORT_EXT_PRIORITY = [".3mf", ".stl", ".step", ".stp", ".zip"]
IMPORT_BLOCKED_EXTS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".svg",
    ".jfif",
    ".tif",
    ".tiff",
    ".css",
    ".js",
    ".mjs",
    ".map",
    ".json",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
}
IMPORT_TIMEOUT_SECONDS = env_int("IMPORT_TIMEOUT_SECONDS", 30)
IMPORT_MAX_MB = env_int("IMPORT_MAX_MB", 512)
IMPORT_MAX_BYTES = max(1, IMPORT_MAX_MB) * 1024 * 1024
IMPORT_HTML_MAX_KB = env_int("IMPORT_HTML_MAX_KB", 4096)
IMPORT_HTML_MAX_BYTES = max(64, IMPORT_HTML_MAX_KB) * 1024
IMPORT_USER_AGENT = "MakerVault/1.0"
IMPORT_BROWSER_USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/121.0.0.0 Safari/537.36"
)

MOUNT_IMPORT_PATH = (os.getenv("IMPORT_MOUNT_PATH") or os.getenv("MOUNT_IMPORT_PATH") or "").strip()
MOUNT_IMPORT_EXTS_RAW = os.getenv("IMPORT_MOUNT_EXTS", "").strip()
MOUNT_IMPORT_INCLUDE_HIDDEN = env_bool("IMPORT_MOUNT_INCLUDE_HIDDEN", False)
MOUNT_IMPORT_ENABLED = env_bool("IMPORT_MOUNT_ON_STARTUP", True)
DEFAULT_MOUNT_IMPORT_EXTS = {
    ".stl",
    ".3mf",
    ".step",
    ".stp",
    ".obj",
    ".svg",
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".bmp",
    ".zip",
}
