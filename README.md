# Doo Now

![header](public/header.png)

> 📇 **Doo Now** - A simple task management application

Doo Now is an application designed to store and manage tasks. It serves as a digital task manager, allowing you to maintain your personal tasks.

## Links

- 🌍 URL: [https://doo-now.vercel.app/](https://doo-now.vercel.app/)
- 📦 Repository: <https://github.com/mchmdirvan/doo-now>

## Features

- ➕ Create Task
- 📖 Read Tasks
- ✏️ Update Task
- 🗑️ Delete Task
- 👤 Show Task Details
- 🔍 Search Tasks

## Tech Stack

- React Typescript
- Tailwind CSS
- Shadcn UI
- React Router
- React Hook Form
- Zod

## Flowchart

```mermaid
flowchart TD
    A[Start Application] --> B{Check Local Storage}
    B -->|Exists| C[Load Task from Local Storage]
    B -->|Empty/Not Exists| D[Initialize Default Data]
    D --> E[Save Initial Data to Local Storage]
    E --> F[Display Task List]
    C --> F

    F --> G{User Action}

    G -->|Create New| H[Show Create Form]
    H --> I[Fill Task Details]
    I --> J[Add to Task Array]
    J --> K[Save to Local Storage]
    K --> F

    G -->|Edit Task| L[Show Edit Form with Data]
    L --> M[Modify Task Details]
    M --> N[Update Task Array]
    N --> K[Save to Local Storage]
    K --> F

    G -->|Delete Task| P[Remove from Task Array]
    P --> K[Save to Local Storage]
    K --> F

    G -->|Search| R[Filter Task Display]
    R --> F

    G -->|View Task| S[Show Task Details]
    S --> F
```

## References

Todoist: [https://todoist.com/](https://todoist.com/)
