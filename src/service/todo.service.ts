import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import { ITodo } from "../interface/todo.interface";
import Todo from "../models/todo.model";

export async function createTodo(
  todo: DocumentDefinition<Omit<ITodo, "createdAt" | "updatedAt">>
) {
  return await Todo.create(todo);
}
export async function findAllTodo() {
  return await Todo.find();
}
export async function findTodoById(
  query: FilterQuery<ITodo>,
  options: QueryOptions = { lean: true }
) {
  return await Todo.findOne(query, {}, options);
}
export async function updateTodoById(
  query: FilterQuery<ITodo>,
  updateTodo: UpdateQuery<ITodo>,
  options: QueryOptions
) {
  return await Todo.findOneAndUpdate(query, updateTodo, options);
}
export async function deleteTodoById(query: FilterQuery<ITodo>) {
  return await Todo.findOneAndDelete(query).populate("createdBy");
}
export async function checkTodoExists(query: FilterQuery<ITodo>){
  return await findTodoById(query);
}