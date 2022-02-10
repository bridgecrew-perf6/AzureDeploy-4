import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { OK } from "../src/constants/error-code.constant";
import { ITodo } from "../src/interface/todo.interface";
import { updateTodoById } from "../src/service/todo.service";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const todoId: string = req.params.id;
    const inputTodo: ITodo = req.body;
    const newTodo: ITodo = { ...inputTodo };
    const updateNewTodo: ITodo = await updateTodoById(
      { _id: todoId },
      newTodo,
      {
        new: true,
      }
    );
    return context.res?.status(OK).send(updateNewTodo);
  } catch (error: any) {
    throw new Error(error);
  }
};
export default httpTrigger;
