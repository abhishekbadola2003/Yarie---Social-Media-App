import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Post from "../models/post";
import { error } from "console";

const router = Router();

router.delete(
  "/api/post/new/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;

      if (!id) {
        const error = new Error("post id is required!") as CustomError;
      }

      await Post.findOne({ _id: id });
    } catch (err) {
      next(new Error("Post cannot be showed."));
    }

    res.status(200).json({ success: true });
  }
);
export { router as newPostRouter };
