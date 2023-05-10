import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { ITodo } from "../types/todo";

const initialState = [
  {
    id: uuid(),
    title: "Debug your code",
    description: "ok doki",
    status: false,
  },
  {
    id: uuid(),
    title: "Find the bug",
    description: "ok dokiiiiiiifdfjkd jkdjkfjkdfj",
    status: false,
  },
  {
    id: uuid(),
    title: "Commit your code",
    description: "ok dokiiiiiiiiiiiiiiiiiiii",
    status: false,
  },
];

const todoSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: ITodo = {
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        dueDate: new Date(),
        timestampCreated: new Date(),
      };
      state.push(todo);
    },
  },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
