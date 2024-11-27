import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is required!");
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    throw new Error("database error!");
  }

  app.listen(7000, () => {
    console.log("Server has started running on port 7000");
  });
};

start();
