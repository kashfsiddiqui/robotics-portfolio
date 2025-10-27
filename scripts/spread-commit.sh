#!/usr/bin/env bash
# GitHub Contributions Graph Automation Script
# Generates daily commits from November 1, 2024 to December 31, 2024

# Function to generate commits for a date range
generate_commits() {
    local start_date="2024-11-01"
    local end_date="2024-12-31"
    
    echo "🚀 Starting GitHub contribution automation..."
    echo "📅 Date range: $start_date to $end_date"
    echo "⏰ Commits will be timestamped at 12:00 PM each day"
    echo ""
    
    # Convert dates to seconds for iteration
    start_epoch=$(date -d "$start_date" +%s 2>/dev/null || date -j -f "%Y-%m-%d" "$start_date" +%s 2>/dev/null)
    end_epoch=$(date -d "$end_date" +%s 2>/dev/null || date -j -f "%Y-%m-%d" "$end_date" +%s 2>/dev/null)
    
    if [ -z "$start_epoch" ] || [ -z "$end_epoch" ]; then
        echo "❌ Error: Unable to parse dates. Please ensure date command is available."
        echo "💡 Try running: date --version (Linux) or date (macOS)"
        exit 1
    fi
    
    # Calculate number of days
    days=$(( (end_epoch - start_epoch) / 86400 + 1 ))
    echo "📊 Total days to process: $days"
    echo ""
    
    # Counter for progress
    current_day=1
    
    # Iterate through each day
    current_epoch=$start_epoch
    while [ $current_epoch -le $end_epoch ]; do
        # Format the date
        commit_date=$(date -d "@$current_epoch" "+%Y-%m-%d" 2>/dev/null || date -j -f "%s" "$current_epoch" "+%Y-%m-%d" 2>/dev/null)
        formatted_date=$(date -d "@$current_epoch" "+%B %d, %Y" 2>/dev/null || date -j -f "%s" "$current_epoch" "+%B %d, %Y" 2>/dev/null)
        
        # Generate commit message
        commit_msg="feat(page): added design insights and video updates on $formatted_date"
        
        # Set git environment variables for timestamping
        export GIT_AUTHOR_DATE="${commit_date}T12:00:00"
        export GIT_COMMITTER_DATE="${commit_date}T12:00:00"
        
        # Create a small change to commit (touch a file or add a comment)
        echo "<!-- Commit for $commit_date -->" >> temp_commit.txt
        
        # Stage and commit
        git add temp_commit.txt
        git commit -m "$commit_msg" --no-verify --quiet
        
        # Progress indicator
        echo "✅ Day $current_day/$days: $commit_date - $commit_msg"
        
        # Move to next day
        current_epoch=$((current_epoch + 86400))
        current_day=$((current_day + 1))
        
        # Small delay to prevent overwhelming the system
        sleep 0.1
    done
    
    # Clean up temporary file
    rm -f temp_commit.txt
    
    echo ""
    echo "🎉 Successfully generated $days commits!"
    echo "📈 Your GitHub contribution graph should now show activity from $start_date to $end_date"
    echo ""
    echo "🚀 To push to GitHub, run:"
    echo "   git push origin master"
    echo "   git push kashf-robotics master"
}

# Main execution
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "GitHub Contributions Automation Script"
    echo "======================================"
    echo ""
    echo "Usage: $0 [--help]"
    echo ""
    echo "This script generates daily commits from November 1, 2024 to December 31, 2024"
    echo "Each commit is timestamped at 12:00 PM for a realistic contribution graph."
    echo ""
    echo "Options:"
    echo "  --help, -h    Show this help message"
    echo ""
    echo "Example:"
    echo "  chmod +x scripts/spread-commit.sh"
    echo "  ./scripts/spread-commit.sh"
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

# Run the main function
generate_commits