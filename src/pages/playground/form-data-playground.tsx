import { Plus as PlusIcon, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { initialTaskData } from "@/modules/task/data";
import { Layout } from "@/components/layouts/layout";
import { Calendar } from "@/components/ui/calendar";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FormDataPlayground() {
  const [renderFormTask, setRenderFormTask] = useState(false);
  const [openDateInput, setOpenDateInput] = useState(false);
  const [tasks, setTasks] = useState(initialTaskData);
  const [date, setDate] = useState<Date>();

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");

    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: title as string,
      description: description as string,
      isCompleted: false,
      dueDate: date as Date,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  function deleteTask(id: number) {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  }

  function toogleIsCompleted(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
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
              toogleIsCompleted={() => toogleIsCompleted(task.id)}
            />
          ))}
        </ul>

        {renderFormTask ? (
          <section className="rounded-xl border px-2 py-2">
            <form method="post" onSubmit={addTask} className="flex flex-col">
              <Input
                autoFocus
                id="title"
                name="title"
                placeholder="Title"
                className="font-semibold"
              />

              <Input
                id="description"
                name="description"
                placeholder="Description"
                className="text-xs placeholder:text-xs"
              />

              <Popover open={openDateInput} onOpenChange={setOpenDateInput}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="dueDate"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground justify-start border-none text-left text-xs shadow-none"
                  >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpenDateInput(false);
                    }}
                  />
                </PopoverContent>
              </Popover>

              <div className="border"></div>

              <div className="mt-2 space-x-2 self-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setRenderFormTask(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Add Task
                </Button>
              </div>
            </form>
          </section>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2"
            onClick={() => setRenderFormTask(true)}
          >
            <PlusIcon />
            Add Task
          </Button>
        )}
      </section>
    </Layout>
  );
}
