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
