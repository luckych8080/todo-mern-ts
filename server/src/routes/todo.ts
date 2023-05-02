import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo";

const router: Router = Router();

router
  .get("/", getTodos)
  .post("/", addTodo)
  .put("/:id", updateTodo)
  .delete("/:id", deleteTodo);

export default router;
