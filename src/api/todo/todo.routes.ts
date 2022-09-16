import { Router } from 'express';
import * as TodoHandlers from './todo.handlers';
import { Todo } from './todo.model';
import { verifyRequest } from '../../middlewares';

const router = Router();

router.get('/', TodoHandlers.findAll);
router.post('/', verifyRequest({ body: Todo }), TodoHandlers.createOne);

export default router;
