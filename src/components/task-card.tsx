import { Calendar } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export function TaskCard() {
  return (
    <div className="flex gap-3 border-b pb-3">
      <div>
        <Checkbox id="tasks" />
      </div>

      <div className="space-y-1">
        <p>Task Title</p>
        <p className="text-xs text-neutral-500">Task Description</p>
        <p className="flex gap-1 text-xs text-neutral-500">
          <span className="">
            <Calendar size={12} />
          </span>
          Task Date
        </p>
      </div>
    </div>
  );
}
