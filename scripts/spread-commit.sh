#!/usr/bin/env bash
# Usage:
#   ./scripts/spread-commit.sh "feat(spot): add gallery item" 2025-10-28
# If date is omitted, uses today.

MSG="${1:-chore: scheduled tweak}"
DATE="${2:-$(date +%Y-%m-%d)}"

export GIT_AUTHOR_DATE="${DATE}T12:15:00"
export GIT_COMMITTER_DATE="${DATE}T12:15:00"

git add -A
git commit -m "${MSG}" --no-verify
