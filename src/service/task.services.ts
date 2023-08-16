import { CreateTaskResponse, ITask, ReadTasksResponse } from "../interface/ITask";
import Task from "../models/task.models"
import { TaskError } from "../utils/errors";






/*FETCH CREATE*/
async function fetchCreateTaskService(task: ITask): Promise<CreateTaskResponse | undefined> {
  const newTaskCreated = await Task.create(task);
  if (newTaskCreated) throw new TaskError({ message: "Error while creating task", status: 422 });
  return { msg: "Task created sucessfully!", task: newTaskCreated }
};

/*FETCH READ ALL*/
async function fetchReadAllTasks(): Promise<ReadTasksResponse> {
  const tasks = await Task.find();
  if (!tasks) throw new TaskError({ message: "There are not task on your list", status: 404 })
  return { msg: `We found ${tasks.length} tasks`, tasks }
};



/*FETCH READ ONE*/
async function fetchReadTask(task: ITask): Promise<CreateTaskResponse> {
  const newTaskCreated = await Task.create(task);
  try {
    const data = await Task.create();
    return { msg: "Task created sucessfully!", task: newTaskCreated }

  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
}


/*FETCH UPDATE*/
async function fetchUpdateTaskService() {
  try {
    const data = await Task.create();

  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};


/*FETCH DELETE*/
async function fetchDeleteTaskService() {
  try {
    const data = await Task.create();

  } catch (error: any) {
    console.log("There was an Error" + error)
    throw new Error("System Error!")
  }
};

export {
  fetchCreateTaskService, fetchUpdateTaskService, fetchReadAllTasks, fetchReadTask, fetchDeleteTaskService
}