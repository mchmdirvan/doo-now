import { initialialTask } from "@/data/initial-task";
import type { Task } from "@/types/task";

export function saveTasks(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  if (!tasks) {
    saveTasks(initialialTask);
    return initialialTask;
  }
  return JSON.parse(tasks);
}
