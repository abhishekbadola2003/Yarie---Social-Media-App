import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Comment from "../../models/comment";
import { error } from "console";
const router = Router();

router.post(
  "./api/post/comment/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userName, content } = req.body;

      if (!content) {
        const error = new Error("content is required!") as CustomError;
        error.status = 400;
        return next(error);
      }

      const newComment = new Comment({
        userName: userName ? userName : "anonymous",
      });

      await newComment.save();
    } catch (err) {
      next(new Error("Post cannot be showed."));
    }

    res.status(200).json({ success: true });
  }
);
export { router as NewCommentRouter };
