import { useState } from "react";
import TaskCard from "../components/task-card";
import type { Task } from "../modules/type";
import { Button } from "../components/ui/button";

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
];

export function HomeRoute() {
  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  }

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
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

      <form
        onSubmit={addTask}
        method="post"
        className="border w-fit px-10 py-5 mx-10 space-y-5"
      >
        <div className="flex flex-col">
          <label htmlFor="Title">Task Title</label>
          <input className="border" type="text" name="title" id="title" />
        </div>

        <Button type="submit">Submit Task</Button>
      </form>

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
