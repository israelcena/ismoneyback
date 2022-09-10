import { Router } from 'express';
import * as TodoHandlers from './todo.handlers';

const router = Router();

router.get('/', TodoHandlers.findAll);

export default router;
