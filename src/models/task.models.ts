import { Schema, model } from "mongoose";
import { ITask, category } from "../interface/ITask";

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAT: {
    type: Date,
    default: new Date()
  },
  updateAT: {
    type: Date,
    default: undefined
  },
  reminder: {
    type: Date,
    default: undefined
  },
  completed: {
    type: Boolean,
    default: false,
  },
  file: {
    type: String,
    default: undefined
  },
  category: {
    type: String,
    enum: Object.values(category),
    default: category.none,
  },
});

taskSchema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id
    delete returnedObj.__v
  }
})

const Task = model<ITask>('Task', taskSchema)
export default Task;
