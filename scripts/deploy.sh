#!/usr/bin/env bash
# Deploy dist/ to demo.majestic.tz via SFTP (cPanel has no shell/rsync)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
npm run build

KEY="${DEPLOY_SSH_KEY:-$HOME/.ssh/gha-the-hills-deploy}"
HOST="${DEPLOY_HOST:-62.238.31.147}"
USER="${DEPLOY_USER:-majestic}"
REMOTE="${DEPLOY_PATH:-public_html/demo.majestic.tz}"

if [[ ! -f "$KEY" ]]; then
  echo "Missing SSH key at $KEY"
  echo "Set DEPLOY_SSH_KEY to your GitHub Actions private key file."
  exit 1
fi

echo "Uploading dist/ → ${USER}@${HOST}:${REMOTE}"
scp -i "$KEY" -o BatchMode=yes -o StrictHostKeyChecking=accept-new -r \
  dist/.htaccess dist/index.html dist/assets dist/images \
  "${USER}@${HOST}:${REMOTE}/"
echo "Done. https://demo.majestic.tz/"
