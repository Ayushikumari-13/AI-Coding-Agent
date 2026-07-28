# AI Coding Agent Assignment

## Objective

The goal of this project is to build an AI Coding Agent that can analyze an existing repository, identify important files, generate an execution plan, and summarize the required code modifications.

The target repository is the Node Easy Notes application.

---

## Repository Analysis

The AI Agent identifies the following important files:

- app/models/note.model.js
- app/controllers/note.controller.js
- app/routes/note.routes.js
- server.js

---

## Execution Plan

1. Analyze repository structure
2. Identify important files
3. Locate Note model
4. Locate Controllers
5. Locate Routes
6. Add Category support
7. Add Tags support
8. Implement Search API
9. Preserve existing CRUD functionality
10. Generate summary of modifications

---

## Features Added

- Category support
- Tags support
- Search API
- Category Filter
- Tag Filter
- Repository Analyzer
- Execution Planner
- Change Summary Generator

---

## AI Agent Workflow

1. Analyze repository
2. Detect important files
3. Generate execution plan
4. Suggest code modifications
5. Generate change summary

---

## Assumptions

- Existing CRUD APIs should not break.
- Only required files are modified.
- Existing project structure is preserved.

---

## Trade-offs

- The current AI Agent demonstrates repository analysis, planning, and change reporting.
- Automatic code generation is intentionally kept simple for this assignment.

---

## Technologies Used

- Python 3
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```
app/
│
├── controllers/
├── models/
├── routes/
├── ai-agent/
│   ├── main.py
│   ├── repository_analyzer.py
│   ├── planner.py
│   ├── code_modifier.py
│   ├── change_summary.py
│   └── requirements.txt
```

---

## Output

The AI Agent:

- Analyzes the repository
- Creates an execution plan
- Lists planned code changes
- Generates a change summary