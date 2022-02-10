import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { OK } from "../src/constants/error-code.constant";
import { ITodo } from "../src/interface/todo.interface";
import { findAllTodo } from "../src/service/todo.service";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const todos: ITodo[] = await findAllTodo();
    return context.res?.status(OK).send(todos);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default httpTrigger;
