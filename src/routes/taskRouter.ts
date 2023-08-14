import { Router } from "express";
import { createTask, deleteTask, readAllTasks, readTasks, updateTask } from "../controllers/task.controller";

const taskRouter = Router()

/*CREATE*/
taskRouter.post('/create', createTask);
/*READ-ALL*/
taskRouter.get('/tasks', readTasks);
/*READ*/
taskRouter.get('/:id/task', readAllTasks);
/*UPDATE*/
taskRouter.put('/:id/task', updateTask);
/*DELETE*/
taskRouter.delete('/:id/task', deleteTask);

export default taskRouter;