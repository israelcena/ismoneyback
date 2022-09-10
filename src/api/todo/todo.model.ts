import { db } from '../../db';
import { z } from 'zod';
import { WithId } from 'mongodb';

const Todo = z.object({
  content: z.string().min(1).max(64),
  done: z.boolean().default(false),
});

export type Todo = z.infer<typeof Todo>;
export type TodoWithId = WithId<Todo>;
export const Todos = db.collection<Todo>('todos');