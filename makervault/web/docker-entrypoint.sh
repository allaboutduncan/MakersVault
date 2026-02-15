#!/bin/sh
set -e

PUID=${PUID:-1000}
PGID=${PGID:-1000}
APP_USER=appuser
APP_GROUP=appgroup

# Reverse proxy quickstart: derive defaults from PUBLIC_URL when provided.
if [ -n "${PUBLIC_URL:-}" ]; then
  PUBLIC_URL="${PUBLIC_URL%/}"
  if [ -z "${VITE_API_URL:-}" ]; then
    export VITE_API_URL="${PUBLIC_URL}/api"
  fi
  if [ -z "${CORS_ORIGINS:-}" ]; then
    export CORS_ORIGINS="${PUBLIC_URL}"
  fi
  if [ -z "${VITE_ALLOWED_HOSTS:-}" ]; then
    export VITE_ALLOWED_HOSTS="${PUBLIC_URL}"
  fi
fi

# Reuse an existing user if the requested UID is already present (e.g., the base
# image ships with a user at UID 1000). This avoids adduser failing with
# "uid in use" while still honoring PUID.
EXISTING_USER_FOR_UID=$(getent passwd "$PUID" | cut -d: -f1)
if [ -n "$EXISTING_USER_FOR_UID" ]; then
  APP_USER="$EXISTING_USER_FOR_UID"
fi

# Match or create the group for the provided PGID.
EXISTING_GROUP_FOR_GID=$(getent group "$PGID" | cut -d: -f1)
if [ -n "$EXISTING_GROUP_FOR_GID" ]; then
  APP_GROUP="$EXISTING_GROUP_FOR_GID"
else
  if getent group "$APP_GROUP" >/dev/null 2>&1 && [ "$(getent group "$APP_GROUP" | cut -d: -f3)" != "$PGID" ]; then
    delgroup "$APP_GROUP"
  fi
  if ! getent group "$APP_GROUP" >/dev/null 2>&1; then
    addgroup -g "$PGID" "$APP_GROUP"
  fi
fi

# Recreate the app user when UID or primary GID differ.
if id "$APP_USER" >/dev/null 2>&1; then
  if [ "$(id -u "$APP_USER")" != "$PUID" ] || [ "$(id -g "$APP_USER")" != "$PGID" ]; then
    deluser "$APP_USER"
  fi
fi
if ! id "$APP_USER" >/dev/null 2>&1; then
  adduser -D -H -u "$PUID" -G "$APP_GROUP" "$APP_USER"
fi

chown -R "$PUID":"$PGID" /app /home/"$APP_USER" 2>/dev/null || true

exec su-exec "$APP_USER" "$@"
