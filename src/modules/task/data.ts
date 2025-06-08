import type { Task } from "../type";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-11 07:00"),
  },
  {
    id: 2,
    title: "Cleaning The Room",
    completed: false,
    date: new Date("2025-05-11 08:00"),
  },
  {
    id: 3,
    title: "Morning Exercise",
    completed: false,
    date: new Date("2025-05-11 08:30"),
  },
  {
    id: 4,
    title: "Check Emails",
    completed: false,
    date: new Date("2025-05-11 09:00"),
  },
  {
    id: 5,
    title: "Team Meeting",
    completed: false,
    date: new Date("2025-05-11 10:00"),
  },
  {
    id: 6,
    title: "Project Work",
    completed: false,
    date: new Date("2025-05-11 11:00"),
  },
  {
    id: 7,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-11 12:30"),
  },
];
