import { error } from "console";
import Comment from "../../models/comment";
import {
  NextFunction,
  Express,
  RequestHandler,
  Request,
  Router,
  response,
  ErrorRequestHandler,
} from "express";

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
      await Comment.findOneAndDelete({ _id: commentid });
    } catch (err) {
      next(new error("Comment cannot be updated."));
    }
  }
);
