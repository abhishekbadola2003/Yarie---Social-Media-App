import { NextFunction, Router, Request, Response } from "express";
import Post from "./post";
import { nextTick } from "process";

const router = Router();

router.post(
  "/api/post/update/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    let updatedPost;

    const { content, title } = req.body;

    if (!id) {
      const error = new Error("post id is required") as CustomError;
      error.status = 400;
      next(error);
    }

    try {
      const updatedPost = await Post.findOneAndUpdate(
        { _id: id },
        { $set: { content, title } },
        { new: true }
      );
    } catch (err) {
      const error = new Error("post cannot be updated") as CustomError;
      error.status = 400;
      next(error);
    }
    res.status(200).send(updatedPost);
  }
);

export { router };
