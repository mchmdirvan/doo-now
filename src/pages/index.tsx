import { Plus } from "lucide-react";
import { useState } from "react";

import { initialialTask } from "@/data/initial-task";
import { Layout } from "@/components/layouts/layout";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";

export function Index() {
  const [tasks, setTasks] = useState(initialialTask);

  function deleteTask(id: number) {
    const filteredTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(filteredTask);
  }

  return (
    <Layout>
      <section className="mx-auto max-w-3xl py-10">
        <h1 className="pb-5 text-2xl font-bold">Tasks</h1>

        <ul>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={() => deleteTask(task.id)}
            />
          ))}
        </ul>

        <Button variant="ghost" size="sm" className="mt-2">
          <Plus />
          Add Task
        </Button>
      </section>
    </Layout>
  );
}
