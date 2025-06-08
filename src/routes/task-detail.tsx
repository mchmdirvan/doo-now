import { useParams } from "react-router";

export default function TaskDetailRoute() {
  const params = useParams();

  return (
    <div>
      <h1>Task Detail: {params.taskId}</h1>
    </div>
  );
}
