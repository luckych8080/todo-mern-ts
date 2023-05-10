export enum ITodoStatus {
  OPEN = 0,
  WORKING = 1,
  DONE = 2,
  OVERDUE = 3,
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: ITodoStatus;
  dueDate?: Date;
  timestampCreated: Date;
}
