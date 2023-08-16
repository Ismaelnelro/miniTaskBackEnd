import { Request, Response } from "express";
import { fetchCreateTaskService, fetchReadAllTasks } from "../service/task.services";
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
  const result = await fetchReadAllTasks();
  response(res, 200, result);
};
const readAllTasksCatchedAsync = catchedAsync(readAllTasks);



/*READ ONE*/
async function readTask(req: Request, res: Response) {
  try {

    // const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};
const readTaskCatchedAsync = catchedAsync(readTask);


/*UPDATE*/
async function updateTask(req: Request, res: Response) {
  try {
    
    // const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};
const updateTaskCatchedAsync = catchedAsync(createTask);



/*DELETE*/
async function deleteTask(req: Request, res: Response) {
  try {

    // const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};
const deleteTaskCatchedAsync = catchedAsync(createTask);




export {
  createTaskCatchedAsync,
  readTaskCatchedAsync,
  readAllTasksCatchedAsync,
  updateTaskCatchedAsync,
  deleteTaskCatchedAsync
}