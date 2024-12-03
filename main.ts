import * as dotenv from "dotenv";
dotenv.config();

import express, {
  Request,
  Response,
  NextFunction,
  response,
  ErrorRequestHandler,
} from "express";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import {
  newPostRouter,
  deleteCommentRouter,
  deletePostRouter,
  showPostRouter,
  NewCommentRouter,
  updatePostRouter,
} from "./src/routers";

import { nextTick } from "process";

const app = express();

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use(newPostRouter);
app.use(deleteCommentRouter);
app.use(deletePostRouter);
app.use(showPostRouter);
app.use(NewCommentRouter);
app.use(updatePostRouter);

app.all("*", (req, res, next) => {
  const error = new Error("not found!") as CustomError;
  error.status = 404;
  next(error);
});

declare global {
  interface CustomError extends Error {
    status?: number;
  }
}

app.use((error: CustomError, req: Request, res: Response) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: "something went wrong" });
});

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!");

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error("database error!");
  }

  app.listen(3000, () => console.log("server is up and running on port 3000"));
};

start();
