import { useState } from "react";
import Button from "./components/button";
import TaskCard from "./components/task-card";
import type { Task } from "./modules/type";

const initialTasks: Task[] = [
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
  {
    id: 8,
    title: "Client Call",
    completed: false,
    date: new Date("2025-05-11 14:00"),
  },
  {
    id: 9,
    title: "Code Review",
    completed: false,
    date: new Date("2025-05-11 15:30"),
  },
  {
    id: 10,
    title: "Plan Tomorrow",
    completed: false,
    date: new Date("2025-05-11 17:00"),
  },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  }

  function addTask() {
    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: "Example Task",
      completed: false,
      date: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  return (
    <div className="bg-neutral-800 text-white min-h-screen">
      <header className="py-5 px-10">
        <h1 className="text-indigo-400 text-2xl font-bold">Doo Now</h1>
      </header>

      <Button onClick={addTask}>Add Tasks</Button>

      <ul className="p-10 space-y-5 flex flex-col items-center">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="border bg-neutral-700 flex gap-5 px-5 rounded-md py-2 justify-between min-w-lg max-w-lg"
            >
              <TaskCard task={task} removeTask={removeTask} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
