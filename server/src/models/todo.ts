import { model, Schema } from "mongoose";
import { ITodo } from "../types/todo";

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  status: {
    type: String,
    enum: ["OPEN", "WORKING", "DONE", "OVERDUE"],
    default: "OPEN",
    required: true,
  },
  dueDate: {
    type: Date,
  },
  tag: {
    type: [String],
  },
  timestampCreated: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

export default model<ITodo>("Todo", todoSchema);
