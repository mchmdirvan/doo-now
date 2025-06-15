import type { Task } from "@/modules/task/type";

export const initialTaskData: Task[] = [
  {
    id: 1,
    title: "Welcome to your task manager! 👋",
    description:
      "This is your first task. Click on it to see task details and mark it as complete when you're ready.",
    isCompleted: false,
    dueDate: new Date("2025-06-14"),
  },
  {
    id: 2,
    title: "Add your first real task",
    description: "Try creating a new task by clicking the 'Add Task' button.",
    isCompleted: false,
    dueDate: new Date("2025-06-15"),
  },
];
