import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "Debug your code",
    description: "ok doki",
    status: false,
    tag: ["gfi", "level2"],
    timestampCreated: new Date(),
  },
  {
    id: uuid(),
    title: "Find the bug",
    description: "ok doki",
    status: false,
    tag: ["gfi", "level1"],
    timestampCreated: new Date(),
  },
  {
    id: uuid(),
    title: "Commit your code",
    description: "ok doki",
    status: false,
    tag: ["gfi", "level3"],
    timestampCreated: new Date(),
  },
];

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let item = {
        id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        timestampCreated: new Date(),
      };
      if (action.payload.dueDate)
        item = { ...item, dueDate: action.payload.dueDate };
      if (action.payload.tag) item = { ...item, tag: action.payload.tag };
      state.push(item);
    },
    toggleStatus: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, toggleStatus, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
