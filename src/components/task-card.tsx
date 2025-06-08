import { Link } from "react-router";
import type { Task } from "../modules/type";
import { Button } from "./ui/button";

export default function TaskCard({
  task,
  removeTask,
}: {
  task: Task;
  removeTask: (id: number) => void;
}) {
  return (
    <div className="flex w-full justify-between border bg-neutral-700 gap-5 px-5 rounded-md py-2 min-w-lg max-w-lg">
      <div className="flex gap-5 items-center">
        <input type="checkbox" name="completed" id="completed" />
        <div>
          <h2>{task.title}</h2>
          <p>{task.date.toLocaleString()}</p>
        </div>
      </div>
      <div>
        <Button asChild>
          <Link to={`/task/${task.id}`}>View</Link>
        </Button>

        <Button
          variant="destructive"
          className="cursor-pointer"
          onClick={() => removeTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
