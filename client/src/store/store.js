import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../slice/itemSlice";

export default configureStore({
  reducer: {
    items: itemSlice,
  },
});
