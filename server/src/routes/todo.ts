import { Router } from "express";
import {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const router: Router = Router();

router
  .get("/", getTodos)
  .post("/", addTodo)
  .get("/:id", getTodo)
  .put("/:id", updateTodo)
  .delete("/:id", deleteTodo);

export default router;
