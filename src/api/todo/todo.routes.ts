import { Router, Request, Response } from 'express';
import Todo from './todo.model';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
  res.json([{
    content: 'Learn TypeScript',
    done: false,
  }, {
    content: 'Estudar',
    done: true,
  }, {
    content: 'Teste',
    done: false,
  }]);
});

export default router;
