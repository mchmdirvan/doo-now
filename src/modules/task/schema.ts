import z from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is Required"),
  description: z.string(),
  isCompleted: z.boolean(),
  dueDate: z.date(),
});

export const AddTaskSchema = TaskSchema.pick({
  title: true,
  description: true,
  dueDate: true,
});
