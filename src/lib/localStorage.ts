import { initialTaskData } from "@/modules/task/data";
import type { Task } from "@/modules/task/type";

export function saveTasks(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  if (!tasks) {
    saveTasks(initialTaskData);
    return initialTaskData;
  }
  return JSON.parse(tasks);
}
