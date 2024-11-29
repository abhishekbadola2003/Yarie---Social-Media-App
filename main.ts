import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction, response } from "express";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import { getSystemErrorMap } from "util";
import { error, log } from "console";
import { request } from "http";

const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const customError = err as CustomError;

//   if (customError.status) {
//     return res.status(customError.status).json({ message: customError.message });
//   }

//   res.status(500).json({ message: "Something went wrong" });
// });

app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  const customError = err as CustomError;

  if (customError.status) {
    res.status(customError.status).json({ message: customError.message });
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API!");
});

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!");
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log("database error! " + err);
  }

  app.listen(7000, () => {
    console.log("Server has started running on port 7000");
  });
};

start();
