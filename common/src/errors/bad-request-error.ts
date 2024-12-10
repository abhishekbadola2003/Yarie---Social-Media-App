import { CustomError } from "./custom-errors";

export class BadRequestError extends CustomError {
  statusCode: 400;
  constructor(public message: string) {
    super(message);
  }

  generateErrors() {
    return [{ message: this.message }];
  }
}

// next(new BadRequestError('wrong data'))

//     (err)=> {
//     if (err instanceof CustomError) {
//         res.status(err.statusCode).send(err)
//     }
// }
