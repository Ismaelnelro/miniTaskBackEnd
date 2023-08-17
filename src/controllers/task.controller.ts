import { Request, Response } from "express";
import { fetchCreateTaskService, fetchDeleteTaskByIDService, fetchReadAllTasksService, fetchReadTaskByIdService, fetchUpdateTaskByIdService } from "../service/task.services";
import { ITask } from "../interface/ITask";
import { catchedAsync } from "../utils/catchedAsync";
import { response } from "../utils/response";


/*CREATE*/
async function createTask(req: Request, res: Response) {
  const taskToBeCreated: ITask = req.body
  const result = await fetchCreateTaskService(taskToBeCreated);
  response(res, 200, result);
};
const createTaskCatchedAsync = catchedAsync(createTask);



/*READ ALL*/
async function readAllTasks(req: Request, res: Response) {
  const result = await fetchReadAllTasksService();
  response(res, 200, result);
};
const readAllTasksCatchedAsync = catchedAsync(readAllTasks);



/*READ ONE*/
async function readTask(req: Request, res: Response) {
  const { id } = req.params;
  const result = await fetchReadTaskByIdService(id);
  response(res, 200, result);
};
const readTaskCatchedAsync = catchedAsync(readTask);



/*UPDATE*/
async function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  const update: ITask = req.body;
  const result = await fetchUpdateTaskByIdService({ id, newUpdateTask: update });
  response(res, 200, result);
};
const updateTaskCatchedAsync = catchedAsync(updateTask);



/*DELETE*/
async function deleteTask(req: Request, res: Response) {
  const { id } = req.params
  const result = await fetchDeleteTaskByIDService(id);
  response(res, 200, result);
};
const deleteTaskCatchedAsync = catchedAsync(deleteTask);




export {
  createTaskCatchedAsync,
  readTaskCatchedAsync,
  readAllTasksCatchedAsync,
  updateTaskCatchedAsync,
  deleteTaskCatchedAsync
}