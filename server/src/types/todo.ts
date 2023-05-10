import { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  status: boolean;
  dueDate?: Date;
  tag?: string[];
  timestampCreated: Date;
}
