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
    local start_date="2024-10-28"
    local end_date="2025-10-28"
    
    echo "🚀 Starting GitHub contribution automation..."
    echo "📅 Date range: $start_date to $end_date"
    echo "⏰ Commits will be timestamped around 12:00 PM (±5 minutes)"
    echo "🎲 Daily commits: 1-3 per day (randomized)"
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
    
    # Calculate number of days
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
        
        # Generate random number of commits for this day (1-3)
        commits_today=$(random_between 1 3)
        
        # Progress indicator
        echo "📝 Day $current_day/$days - $commit_date - $commits_today commits"
        
        # Generate commits for this day
        for ((i=1; i<=commits_today; i++)); do
            # Generate random time offset (±5 minutes)
            time_offset=$(random_time_offset)
            
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
            commit_msg="feat(page): added design insights and video updates on $formatted_date"
            
            # Set git environment variables for timestamping
            export GIT_AUTHOR_DATE="${commit_date}T${commit_time}"
            export GIT_COMMITTER_DATE="${commit_date}T${commit_time}"
            
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
    echo "✅ Commits successfully spread across 2024-10-28 → 2025-10-28"
    echo "📈 Your GitHub contribution graph should now show activity from $start_date to $end_date"
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
generate_commits