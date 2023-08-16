
enum category {
  work = "WORK",
  personal = "PERSONAL",
  birthday = "BIRTHDAY",
  none = "NONE"
}

interface ITask {
  title: string,
  description: string,
  createAT?: Date,
  updateAT?: Date,
  reminder?: Date,
  completed?: boolean,
  file?: string,
  category?: category
  // user_id: Schema.Types.ObjectId
}

export {
  ITask,
  category
}



export interface CreateTaskResponse {
  msg: string;
  task: ITask | undefined
}

export interface ReadTasksResponse {
  msg: string;
  tasks: ITask[] | undefined;
}



