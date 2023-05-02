import { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  status: "OPEN" | "WORKING" | "DONE" | "OVERDUE";
  dueDate?: Date;
  tag?: string[];
  timestampCreated: Date;
}
