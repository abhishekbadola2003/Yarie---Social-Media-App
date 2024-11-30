import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Post from "./post";
import { error } from "console";

const router = Router();

router.delete(
  "./api/post/delete/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
      const error = new Error("post id is required!") as CustomError;
    }

    try {
      await Post.findOneAndDelete({ _id: id });
    } catch (err) {
      next(new Error("Post cannot be updated."));
    }

    res.status(200).json({ success: true });
  }
);
export { router as deletePostRouter };
