import { NextFunction, Request, Response, Router } from "express";
import { createTaskCatchedAsync, readTaskCatchedAsync, readAllTasksCatchedAsync, updateTaskCatchedAsync, deleteTaskCatchedAsync } from "../controllers/task.controller";

const taskRouter = Router()

/*CREATE*/
taskRouter.post('/new', createTaskCatchedAsync);
/*READ-ALL*/
taskRouter.get('/', readAllTasksCatchedAsync);
/*READ*/
taskRouter.get('/:id/task', readTaskCatchedAsync);
/*UPDATE*/
taskRouter.put('/:id/task', updateTaskCatchedAsync);
/*DELETE*/
taskRouter.delete('/:id/task', deleteTaskCatchedAsync);



taskRouter.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    error: true,
    message: err.message,
    status: err.statusCode,
  })
})

export default taskRouter;