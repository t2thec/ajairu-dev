#!/bin/bash
# Deploy ajairu.dev to movo server
# Usage: ./deploy.sh
# Builds locally and pushes to server via rsync

set -e

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
SERVER="forge@178.128.160.118"
REMOTE_PATH="/home/forge/ajairu.dev/public/"

echo "Building ajairu.dev..."
cd "$SITE_DIR"
npx astro build

echo "Deploying to movo..."
rsync -avz --delete dist/ "$SERVER:$REMOTE_PATH"

echo "✓ Deployed to http://178.128.160.118 (Host: ajairu.dev)"
echo "  View with: curl -u toby:ajairu2026 -H 'Host: ajairu.dev' http://178.128.160.118/"