import os

IMPORTANT_FILES = [
    "app/models/note.model.js",
    "app/controllers/note.controller.js",
    "app/routes/note.routes.js",
    "server.js"
]

def analyze_repository(project_path):

    print("Repository Analysis")
    print("-" * 40)

    found_files = []

    for file in IMPORTANT_FILES:

        path = os.path.join(project_path, file)

        if os.path.exists(path):
            print(f"Found: {file}")
            found_files.append(file)
        else:
            print(f"Missing: {file}")

    print("\nRepository Summary")
    print("-" * 40)
    print(f"Total Important Files Found : {len(found_files)}")

    return found_files