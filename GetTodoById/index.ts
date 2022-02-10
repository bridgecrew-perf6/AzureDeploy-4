import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { OK } from "../src/constants/error-code.constant";
import { ITodo } from "../src/interface/todo.interface";
import { findTodoById } from "../src/service/todo.service";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const todoId: string = req.params.id;
    const todo: ITodo = await findTodoById({ _id: todoId });
    return context.res?.status(OK).send(todo);
  } catch (error: any) {
    context.res = {
      status: 500,
      body: error,
    };
  }
};

export default httpTrigger;
