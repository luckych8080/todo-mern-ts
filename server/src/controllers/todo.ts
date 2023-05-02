import { Response, Request } from "express";
import { ITodo } from "../types/todo";
import Todo from "../models/todo";

// Get All Todo
const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

// Add a todo
const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      ITodo,
      "title" | "description" | "status" | "tag" | "dueDate"
    >;

    const todo: ITodo = new Todo({
      title: body.title,
      description: body.description,
      status: body.status,
      tag: body.tag,
      dueDate: body.dueDate,
    });

    const newTodo: ITodo = await todo.save();

    // Response
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

// GET Todo
const getTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findById(req.params.id);
    res.status(200).json({ todo });
  } catch (error) {
    throw error;
  }
};

// UPDATE todo
const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );

    // Response
    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

// DELETE Todo
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    );

    // Response
    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: "Todo deleted",
      todo: deleteTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export { getTodos, addTodo, getTodo, updateTodo, deleteTodo };
