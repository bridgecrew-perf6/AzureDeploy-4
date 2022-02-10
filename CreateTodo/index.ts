import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CREATED } from "../src/constants/error-code.constant";
import { ITodo } from "../src/interface/todo.interface";
import { createTodo } from "../src/service/todo.service";
import connect from "../src/utils/connect-db.utils";

connect();
const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  try {
    const inputTodo: ITodo = req.body;
    const newTodo: ITodo = { ...inputTodo };
    const todo: ITodo = await createTodo(newTodo);
    return context.res?.status(CREATED).send(todo);
  } catch (error: any) {
    context.res = {
      status: 500,
      body: error,
    };
  }
};

export default httpTrigger;
