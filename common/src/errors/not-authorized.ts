import { measureMemory } from "vm";
import { CustomError } from "./custom-errors";

export class NotAuthorizedError extends CustomError {
  statusCode: 401;

  constructor() {
    super("not authorized");
  }

  generateErrors() {
    return [{ message: "not authorized" }];
  }
}
