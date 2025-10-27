#!/usr/bin/env bash
# GitHub Contributions Graph Helper
# Distributes commits across 90 days for a cleaner contribution graph

# Generate 10 dates spread across the next 90 days
# Starting from today, every 9 days
DATES=(
  "2025-01-15"  # Today's commit
  "2025-01-24"  # +9 days
  "2025-02-02"  # +18 days
  "2025-02-11"  # +27 days
  "2025-02-20"  # +36 days
  "2025-03-01"  # +45 days
  "2025-03-10"  # +54 days
  "2025-03-19"  # +63 days
  "2025-03-28"  # +72 days
  "2025-04-06"  # +81 days
)

echo "GitHub Contributions Distribution Plan (90 days):"
echo "================================================"
for i in "${!DATES[@]}"; do
  echo "Commit $((i+1)): ${DATES[i]}"
done

echo ""
echo "Usage for future commits:"
echo "git add ."
echo "export GIT_AUTHOR_DATE=\"2025-01-24T12:15:00\""
echo "export GIT_COMMITTER_DATE=\"2025-01-24T12:15:00\""
echo "git commit -m \"feat(page): description\""
echo "git push"
