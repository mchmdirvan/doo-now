import TaskCard from "@/components/task-card";
import { initialTasks } from "@/modules/task/data";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useParams } from "react-router";

export default function TaskDetailRoute() {
  const params = useParams();
  const taskId = Number(params.taskId);

  const [tasks] = useLocalStorage("tasks", initialTasks);

  const taskItem = tasks.find((task) => task.id === taskId);
  console.log(taskItem);

  if (!taskItem) {
    return (
      <div>
        <h1>Task {taskId} not found</h1>
      </div>
    );
  }

  return (
    <div>
      <TaskCard task={taskItem} />
    </div>
  );
}
