import TaskCard from "../components/task-card";
import { Button } from "../components/ui/button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { initialTasks } from "@/modules/task/data";

export function HomeRoute() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);

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
