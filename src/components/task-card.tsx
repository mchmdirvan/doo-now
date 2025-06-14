import { Calendar } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { type Task } from "../types/task";

type TaskProps = {
  task: Task;
};

export function TaskCard({ task }: TaskProps) {
  return (
    <li className="flex gap-3 border-b pb-3">
      <div>
        <Checkbox id="tasks" />
      </div>

      <div className="space-y-1">
        <p>{task.title}</p>
        <p className="text-xs text-neutral-500">{task.description}</p>
        <p className="flex gap-1 text-xs text-neutral-500">
          <span>
            <Calendar size={12} />
          </span>
          {/* {taskItem.dueDate} */}
        </p>
      </div>
    </li>
  );
}
