import { Layout } from "@/components/layouts/layout";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function Index() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl py-10">
        <h1 className="pb-5 text-2xl font-bold">Tasks</h1>

        <TaskCard />

        <Button variant="ghost" size="sm" className="mt-2">
          <Plus />
          Add Task
        </Button>
      </section>
    </Layout>
  );
}
