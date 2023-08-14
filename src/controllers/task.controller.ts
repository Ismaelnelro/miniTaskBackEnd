import { Request, Response } from "express";
import { fetchCreateTaskService } from "../service/task.services";

async function createTask(req: Request, res: Response) {
  try {

     const res = await fetchCreateTaskService();

  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};
async function readTasks(req: Request, res: Response) {
  try {

     const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};

async function readAllTasks(req: Request, res: Response) {
  try {

     const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};

async function updateTask(req: Request, res: Response) {
  try {

     const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};
async function deleteTask(req: Request, res: Response) {
  try {

     const res = await fetchCreateTaskService();
  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};




export { createTask, readTasks,readAllTasks, updateTask, deleteTask }