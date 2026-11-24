#!/usr/bin/env bash
# Installs the site-upgrade skill for ALL your Claude Code projects (user-level).
# Run from a checkout of this repo:  bash scripts/install-site-upgrade.sh
set -euo pipefail
src="$(cd "$(dirname "$0")/.." && pwd)/.claude/skills/site-upgrade"
dest="${CLAUDE_HOME:-$HOME/.claude}/skills/site-upgrade"
mkdir -p "$(dirname "$dest")"
rm -rf "$dest"
cp -R "$src" "$dest"
echo "Installed to $dest — available as /site-upgrade in every project (restart Claude Code)."
