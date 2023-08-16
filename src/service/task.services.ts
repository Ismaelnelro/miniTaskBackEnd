import { CreateTaskResponse, ITask, ReadTasksResponse } from "../interface/ITask";
import Task from "../models/task.models"
import { TaskError } from "../utils/errors";






/*FETCH CREATE*/
async function fetchCreateTaskService(task: ITask): Promise<CreateTaskResponse | undefined> {
  const newTaskCreated = await Task.create(task);
  if (!newTaskCreated) throw new TaskError({ message: "Error while creating task", status: 422 });
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


interface UpdateTask {
  id: string;
  newUpdateTask: ITask
}

/*FETCH UPDATE*/

async function fetchUpdateTaskByIdService({ id, newUpdateTask }: UpdateTask): Promise<any> {

  const updateTask: ITask = {
    ...newUpdateTask,
    updateAT: new Date()
  }

  const updatedTask = await Task.findByIdAndUpdate(id, updateTask)
  if (!updateTask) throw new TaskError({ message: "imposible update", status: 404 })
  return { msg: `We update task with id: - ${id} `, updateTask }
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
  fetchCreateTaskService, fetchUpdateTaskByIdService, fetchReadAllTasks, fetchReadTask, fetchDeleteTaskService
}