import { Calendar, Eye, PencilIcon, Trash2Icon } from "lucide-react";

import { type Task } from "../types/task";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

type TaskProps = {
  task: Task;
};

export function TaskCard({ task }: TaskProps) {
  return (
    <li className="flex justify-between border-b pb-3">
      <div className="flex gap-3">
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
      </div>

      <div className="space-x-2">
        <Button variant="secondary" size="icon" className="size-8">
          <Eye />
        </Button>
        <Button variant="secondary" size="icon" className="size-8">
          <PencilIcon />
        </Button>
        <Button variant="destructive" size="icon" className="size-8">
          <Trash2Icon />
        </Button>
      </div>
    </li>
  );
}
