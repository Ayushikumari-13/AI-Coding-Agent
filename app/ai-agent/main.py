import os
from repository_analyzer import analyze_repository
from planner import create_plan
from code_modifier import show_changes
from change_summary import generate_summary

# Project Root Path
PROJECT_PATH = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..", "..")
)

print("=" * 50)
print("AI Coding Agent")
print("=" * 50)

# Analyze Repository
files = analyze_repository(PROJECT_PATH)

# Show Identified Files
print("\nFiles Identified By Agent")
print("-" * 40)

for file in files:
    print("•", file)

# Generate Execution Plan
create_plan()

# Show Planned Changes
show_changes()
generate_summary()
print("\nRepository analysis completed successfully.")
print("=" * 50)