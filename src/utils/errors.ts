interface ITaskError {
  message: string;
  status?: number
}

export class TaskError extends Error {
  statusCode: number;
  constructor({ message, status = 400 }: ITaskError) {
    super(message);
    this.statusCode = status;
  }
}