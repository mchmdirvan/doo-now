import { Calendar } from "lucide-react";

import { type Task } from "../types/task";
import { Checkbox } from "./ui/checkbox";

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
          {task.dueDate.toLocaleString()}
        </p>
      </div>
    </li>
  );
}
