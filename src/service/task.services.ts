import { CreateTaskResponse, ITask, ReadTasksResponse, UpdateTask } from "../interface/ITask";
import Task from "../models/task.models"
import { TaskError } from "../utils/errors";



/*FETCH CREATE*/
async function fetchCreateTaskService(task: ITask): Promise<CreateTaskResponse | undefined> {
  const newTaskCreated = await Task.create(task);
  if (!newTaskCreated) throw new TaskError({ message: "Error while creating task", status: 422 });
  return { msg: "Task created sucessfully!", task: newTaskCreated }
};


/*FETCH READ ALL*/
async function fetchReadAllTasksService(): Promise<ReadTasksResponse> {
  const tasks = await Task.find();
  if (!tasks) throw new TaskError({ message: "There are not task on your list", status: 404 })
  return { msg: `We found ${tasks.length} tasks`, tasks }
};



/*FETCH READ ONE*/
async function fetchReadTaskByIdService(id: string): Promise<CreateTaskResponse | undefined> {
  const tasksFound = await Task.findById(id);
  if (tasksFound) return { msg: "Task created sucessfully!", task: tasksFound }
}


/*FETCH UPDATE*/
async function fetchUpdateTaskByIdService({ id, newUpdateTask }: UpdateTask): Promise<CreateTaskResponse | undefined> {
  const updateTask: ITask = {
    ...newUpdateTask,
    updateAT: new Date()
  }
  const updatedTask = await Task.findByIdAndUpdate(id, updateTask)
  if (!updateTask) throw new TaskError({ message: "imposible update", status: 404 })
  if (updatedTask) return { msg: `We update task with id: - ${id} `, task: updateTask }
};


/*FETCH DELETE*/
async function fetchDeleteTaskByIDService(id: string) {
  const taskRemoved = await Task.findByIdAndDelete(id);
  return { msg: `We remove task with id: - ${id}`, taskRemoved }
};

export {
  fetchCreateTaskService, fetchUpdateTaskByIdService, fetchReadAllTasksService, fetchReadTaskByIdService, fetchDeleteTaskByIDService
}