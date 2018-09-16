import express from 'express';
import { TodoController } from '../controllers/TodoController';

const apiRouter = express.Router();

apiRouter.get('/todos', TodoController.findAll);
apiRouter.get('/todos/:id', TodoController.find);
apiRouter.post('/todos/create', TodoController.create);
apiRouter.post('/todos/update', TodoController.update);
apiRouter.post('/todos/delete', TodoController.delete);

export default apiRouter;
