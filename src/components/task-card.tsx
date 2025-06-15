import {
  Calendar as CalendarIcon,
  Eye as EyeIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";

import { type Task } from "../types/task";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Link } from "react-router";

type TaskProps = {
  task: Task;
  deleteTask: () => void;
  toogleIsCompleted: () => void;
};

export function TaskCard({ task, deleteTask, toogleIsCompleted }: TaskProps) {
  return (
    <li className="flex justify-between border-b py-3">
      <div className="flex gap-3">
        <div>
          <Checkbox
            id="isCompleted"
            name="isCompleted"
            defaultChecked={task.isCompleted}
            onClick={toogleIsCompleted}
          />
        </div>

        <div className="space-y-1">
          <p className={`${task.isCompleted ? "line-through" : ""}`}>
            {task.title}
          </p>
          <p className="text-xs text-neutral-500">{task.description}</p>
          <p className="flex gap-1 text-xs text-neutral-500">
            <span>
              <CalendarIcon size={12} />
            </span>
            {task.dueDate.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="space-x-2">
        <Link to={`/tasks/${task.id}`}>
          <Button variant="secondary" size="icon" className="size-8">
            <EyeIcon />
          </Button>
        </Link>
        <Button variant="secondary" size="icon" className="size-8">
          <PencilIcon />
        </Button>
        <Button
          onClick={deleteTask}
          variant="destructive"
          size="icon"
          className="size-8"
        >
          <Trash2Icon />
        </Button>
      </div>
    </li>
  );
}
