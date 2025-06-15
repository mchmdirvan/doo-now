import { Plus as PlusIcon, Calendar as CalendarIcon } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { initialialTask } from "@/data/initial-task";
import { Layout } from "@/components/layouts/layout";
import { Calendar } from "@/components/ui/calendar";
import { TaskCard } from "@/components/task-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Task } from "@/types/task";

export function RhfPlayground() {
  const [renderFormTask, setRenderFormTask] = useState(false);
  const [openDateInput, setOpenDateInput] = useState(false);
  const [tasks, setTasks] = useState(initialialTask);
  const [date, setDate] = useState<Date>();

  const { register, handleSubmit } = useForm<Task>();

  const addTask: SubmitHandler<Task> = (data) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: data.title,
      description: data.description,
      isCompleted: false,
      dueDate: date as Date,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

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
            <form onSubmit={handleSubmit(addTask)} className="flex flex-col">
              <Input
                autoFocus
                id="title"
                placeholder="Title"
                className="font-semibold"
                {...register("title")}
              />

              <Input
                id="description"
                placeholder="Description"
                className="text-xs placeholder:text-xs"
                {...register("description")}
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
