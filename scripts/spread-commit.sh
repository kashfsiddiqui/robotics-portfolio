#!/usr/bin/env bash
# GitHub Contributions Graph Automation Script
# Generates realistic daily commits from October 28, 2024 to October 28, 2025

# Function to generate random number between min and max (inclusive)
random_between() {
    local min=$1
    local max=$2
    echo $((RANDOM % (max - min + 1) + min))
}

# Function to generate random time offset (±5 minutes)
random_time_offset() {
    local offset_minutes=$(random_between -5 5)
    echo $offset_minutes
}

# Function to format date
format_date() {
    local epoch=$1
    if command -v date >/dev/null 2>&1; then
        if date --version >/dev/null 2>&1; then
            # Linux date command
            date -d "@$epoch" "+%Y-%m-%d"
        else
            # macOS date command
            date -j -f "%s" "$epoch" "+%Y-%m-%d"
        fi
    else
        echo "Error: date command not found"
        exit 1
    fi
}

# Function to format date for display
format_date_display() {
    local epoch=$1
    if command -v date >/dev/null 2>&1; then
        if date --version >/dev/null 2>&1; then
            # Linux date command
            date -d "@$epoch" "+%B %d, %Y"
        else
            # macOS date command
            date -j -f "%s" "$epoch" "+%B %d, %Y"
        fi
    else
        echo "Error: date command not found"
        exit 1
    fi
}

# Function to generate commits for a date range
generate_commits() {
    local start_date="2025-01-01"
    local end_date="2025-10-30"
    
    echo "🚀 Starting GitHub contribution automation..."
    echo "📅 Date range: $start_date to $end_date"
    echo "⏰ Commits timestamped around 12:00 PM (±5–60 minutes); ~90 min between same-day commits"
    echo "🎲 Daily activity: 70% active days; on active days 1–3 commits (60/30/10%)"
    echo ""
    
    # Convert dates to seconds for iteration
    if command -v date >/dev/null 2>&1; then
        if date --version >/dev/null 2>&1; then
            # Linux date command
            start_epoch=$(date -d "$start_date" +%s)
            end_epoch=$(date -d "$end_date" +%s)
        else
            # macOS date command
            start_epoch=$(date -j -f "%Y-%m-%d" "$start_date" +%s)
            end_epoch=$(date -j -f "%Y-%m-%d" "$end_date" +%s)
        fi
    else
        echo "❌ Error: date command not found"
        exit 1
    fi
    
    if [ -z "$start_epoch" ] || [ -z "$end_epoch" ]; then
        echo "❌ Error: Unable to parse dates. Please ensure date command is available."
        exit 1
    fi
    
    # Calculate number of days (inclusive end)
    days=$(( (end_epoch - start_epoch) / 86400 + 1 ))
    echo "📊 Total days to process: $days"
    echo ""
    
    # Counters for progress
    current_day=1
    total_commits=0
    
    # Iterate through each day
    current_epoch=$start_epoch
    while [ $current_epoch -le $end_epoch ]; do
        # Format the date
        commit_date=$(format_date $current_epoch)
        formatted_date=$(format_date_display $current_epoch)
        
        # Idempotent skip: if there is already any commit for this author-date day, skip
        if git log --since="${commit_date} 00:00:00" --until="${commit_date} 23:59:59" --format="%ad" --date=short | grep -q "^${commit_date}$"; then
            commits_today=0
            echo "🟨 Skipping ${commit_date} (already has commits)"
        else
            # Decide if today is active (70% chance)
            active_roll=$((RANDOM % 100))
            if [ $active_roll -lt 70 ]; then
                # Active day: decide number of commits based on weighted chances
                weight_roll=$((RANDOM % 100))
                if [ $weight_roll -lt 60 ]; then
                    commits_today=1
                elif [ $weight_roll -lt 90 ]; then
                    commits_today=2
                else
                    commits_today=3
                fi
            else
                commits_today=0
            fi
        fi
        
        # Progress indicator
        echo "📝 Day $current_day/$days - $commit_date - $commits_today commits"
        echo "Day $current_day/$days – $commit_date – [Commits today: $commits_today]"
        
        # Generate commits for this day
        for ((i=1; i<=commits_today; i++)); do
            echo "   • Generating commit $i/$commits_today for $commit_date"
            # Generate random time offset (±5 minutes)
            # Expand to ±5–60 minutes
            # choose range edge: 0 => 5-30, 1 => 30-60
            range_pick=$((RANDOM % 2))
            if [ $range_pick -eq 0 ]; then
                base_offset=$(random_between 5 30)
            else
                base_offset=$(random_between 30 60)
            fi
            sign=$((RANDOM % 2))
            if [ $sign -eq 0 ]; then
                time_offset=$((-1 * base_offset))
            else
                time_offset=$base_offset
            fi

            # Spread multi-commit days by ~90 minutes between commits
            additional_offset=$(( (i - 1) * 90 ))
            time_offset=$(( time_offset + additional_offset ))
            
            # Calculate commit time (12:00 PM + offset)
            commit_hour=12
            commit_minute=$((60 + time_offset))
            
            # Handle minute overflow/underflow
            if [ $commit_minute -ge 60 ]; then
                commit_hour=$((commit_hour + 1))
                commit_minute=$((commit_minute - 60))
            elif [ $commit_minute -lt 0 ]; then
                commit_hour=$((commit_hour - 1))
                commit_minute=$((commit_minute + 60))
            fi
            
            # Format time with leading zeros
            commit_time=$(printf "%02d:%02d:00" $commit_hour $commit_minute)
            
            # Generate commit message
            # Randomize commit message from pool (portfolio scoped)
            case $((RANDOM % 5)) in
              0) commit_msg="feat(page): add content updates";;
              1) commit_msg="fix(content): adjust gallery ordering";;
              2) commit_msg="style(ui): spacing and typography polish";;
              3) commit_msg="chore(build): deployment config sync";;
              4) commit_msg="docs(portfolio): note design iteration";;
            esac
            
            # Set git environment variables for timestamping
            # Explicitly export timestamps for this commit
            export GIT_AUTHOR_DATE="${commit_date} ${commit_time}"
            export GIT_COMMITTER_DATE="${commit_date} ${commit_time}"
            
            # Create a small change to commit
            echo "<!-- Commit for $commit_date at $commit_time (commit $i/$commits_today) -->" >> activity.log
            
            # Stage and commit
            git add activity.log
            git commit -m "$commit_msg" --no-verify --quiet
            
            total_commits=$((total_commits + 1))
        done
        
        # Move to next day
        current_epoch=$((current_epoch + 86400))
        current_day=$((current_day + 1))
        
        # Small delay to prevent overwhelming the system
        sleep 0.05
    done
    
    # Clean up temporary file
    rm -f activity.log
    
    echo ""
    echo "🎉 Successfully generated $total_commits commits across $days days!"
    echo "✅ Backfill complete: $start_date → $end_date"
    echo "📈 Your GitHub contribution graph should now show activity across 2025"
    
    # Push to default branch remotes if available
    if git remote | grep -q "^origin$"; then
      git push origin HEAD:main --quiet || true
    fi
    if git remote | grep -q "^kashf-robotics$"; then
      git push kashf-robotics HEAD:master --quiet || true
    fi
    
    echo ""
    echo "Run instructions:"
    echo "chmod +x scripts/spread-commit.sh"
    echo "./scripts/spread-commit.sh \"feat(page): portfolio iteration\""
    echo ""
    echo "Verify commits:"
    echo "git log --since=\"2025-01-01\" --until=\"2025-10-30\" --format=\"%h %ad %s\" --date=short"
    echo ""
    echo "Reminder: 2024 greens appear under the 2024 tab; this backfill populates 2025."
    echo ""
    echo "🚀 To push to GitHub, run:"
    echo "   git push origin master"
    echo "   git push kashf-robotics master"
}

# Function to show help
show_help() {
    echo "GitHub Contributions Automation Script"
    echo "======================================"
    echo ""
    echo "Usage: $0 [--help]"
    echo ""
    echo "This script generates realistic daily commits from October 28, 2024 to October 28, 2025"
    echo "Each day will have 1-3 commits (randomized) timestamped around 12:00 PM (±5 minutes)."
    echo ""
    echo "Features:"
    echo "  • Random daily commit count (1-3 per day)"
    echo "  • Realistic timestamps with slight randomization"
    echo "  • Progress tracking and safety checks"
    echo "  • Cross-platform compatibility (Linux + macOS)"
    echo "  • Automatic cleanup of temporary files"
    echo ""
    echo "Options:"
    echo "  --help, -h    Show this help message"
    echo ""
    echo "Example:"
    echo "  chmod +x scripts/spread-commit.sh"
    echo "  ./scripts/spread-commit.sh"
    echo ""
    echo "Safety Features:"
    echo "  • Checks for git repository"
    echo "  • Warns about uncommitted changes"
    echo "  • Uses temporary files to avoid conflicts"
    echo "  • Automatic cleanup after completion"
}

# Main execution
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    show_help
    exit 0
fi

# Optional email parameter via --email or COMMIT_EMAIL env
USER_EMAIL=""
for arg in "$@"; do
  case $arg in
    --email=*)
      USER_EMAIL="${arg#*=}"
      shift
      ;;
  esac
done
if [ -z "$USER_EMAIL" ] && [ -n "$COMMIT_EMAIL" ]; then
  USER_EMAIL="$COMMIT_EMAIL"
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    echo "💡 Please run this script from your project root directory"
    exit 1
fi

# Check if there are any uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    echo "💡 Please commit or stash your changes before running this script"
    echo ""
    read -p "Do you want to continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Script cancelled"
        exit 1
    fi
fi

# Check if date command is available
if ! command -v date >/dev/null 2>&1; then
    echo "❌ Error: date command not found"
    echo "💡 Please ensure the date command is available on your system"
    exit 1
fi

# Run the main function
# Ensure verified email is configured
if [ -n "$USER_EMAIL" ]; then
  git config user.email "$USER_EMAIL"
fi

# If still no email in config, abort to avoid anonymous commits
if [ -z "$(git config user.email)" ]; then
  echo "❌ Error: No Git user.email configured. Provide --email=you@example.com or set COMMIT_EMAIL."
  exit 1
fi

generate_commits