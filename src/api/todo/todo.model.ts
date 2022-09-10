import { z } from 'zod';

const Todo = z.object({
  content: z.string().min(1).max(64),
  done: z.boolean().default(false),
});

type Todo = z.infer<typeof Todo>;

export default Todo;