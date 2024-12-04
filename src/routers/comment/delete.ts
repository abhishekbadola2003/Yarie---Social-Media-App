import { Router, Request, Response, NextFunction } from "express";
import { error } from "console";
import Comment from "../models/comment";
import { Express, RequestHandler, ErrorRequestHandler } from "express";
// import Post from "../../models/post";
import Post from "../models/post";
const router = Router();

router.post(
  "/api/comment/:commentid/delete/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { postId, commentid } = req.params;

    if (!commentid || !postId) {
      const customError = new Error(
        "commentid or postid is missing"
      ) as CustomError;
      customError.status = 400;
      return next(customError);
    }

    try {
      await Post.findOneAndDelete({ _id: commentid });
    } catch (err) {
      const error = new Error("Post cannot be updated.") as CustomError;
      error.status = 500;
      return next(error);
    }

    await Post.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: commentid } }
    );

    res.status(200).json({ success: true });
  }
);

export { router as deleteCommentRouter };
