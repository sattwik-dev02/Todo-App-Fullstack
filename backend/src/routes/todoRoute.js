import express from "express";
import { validateData } from "../middleware/validateData.js";
import { todoValidateSchema } from "../validators/todoValidate.js";
import { createTodo } from "../controllers/createTodo.js";
import { getAllTodo } from "../controllers/getAllTodo.js";
import { getTodoById } from "../controllers/getTodoById.js";
import { updateTodo } from "../controllers/updateTodo.js";
import { deleteTodo } from "../controllers/deleteTodo.js";
const todoRoute = express.Router();

todoRoute.post("/create", validateData(todoValidateSchema), createTodo);
todoRoute.get("/getAll", getAllTodo);
todoRoute.get("/getById/:id", getTodoById);
todoRoute.put("/update/:id", updateTodo);
todoRoute.delete("/delete/:id", deleteTodo);

export default todoRoute;
