def generate_summary():

    print("\nChange Summary")
    print("-" * 40)

    summary = [
        "Added Category field to Note model.",
        "Added Tags field to Note model.",
        "Updated Create Note API.",
        "Updated Update Note API.",
        "Added Search API.",
        "Added Category Filter API.",
        "Added Tag Filter API.",
        "Preserved existing CRUD functionality."
    ]

    for item in summary:
        print("✔", item)

    return summary