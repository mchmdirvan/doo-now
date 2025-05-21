import type { Task } from "../modules/type";
import Button from "./button";

export default function TaskCard({
  task,
  removeTask,
}: {
  task: Task;
  removeTask: (id: number) => void;
}) {
  return (
    <div>
      <div className="flex gap-5 items-center">
        <input type="checkbox" name="completed" id="completed" />
        <div>
          <h2>{task.title}</h2>
          <p>{task.date.toLocaleString()}</p>
        </div>
      </div>
      <Button onClick={() => removeTask(task.id)}>Delete</Button>
    </div>
  );
}
