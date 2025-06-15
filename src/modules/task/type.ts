import type z from "zod";
import type { AddTaskSchema, TaskSchema } from "./schema";

export type Task = z.infer<typeof TaskSchema>;
export type AddTask = z.infer<typeof AddTaskSchema>;
