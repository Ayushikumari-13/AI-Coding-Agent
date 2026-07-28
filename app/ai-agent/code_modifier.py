def show_changes():

    print("\nPlanned Code Changes")
    print("-" * 40)

    changes = [
        "Update Note Model",
        "Add Category field",
        "Add Tags field",
        "Modify Controller",
        "Add Search API",
        "Add Category Filter",
        "Add Tag Filter",
        "Keep existing CRUD APIs unchanged"
    ]

    for change in changes:
        print("✔", change)

    return changes