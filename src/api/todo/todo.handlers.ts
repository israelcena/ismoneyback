import { Request, Response } from 'express';
import { TodoWithId, Todos } from './todo.model';

export async function findAll(req: Request, res: Response<TodoWithId[]>) {
  const result = await Todos.find();
  const todos = await result.toArray();
  res.json(todos);
}