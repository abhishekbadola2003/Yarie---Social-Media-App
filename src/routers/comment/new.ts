import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Comment from "../../models/comment";
import { error } from "console";
const router = Router();

router.post(
  "/api/comment/new",
  async (req: Request, res: Response, next: NextFunction) => {
    const { userName, Content } = req.body;

    if (!Content) {
      const Error = new error("no content written") as CustomError;
      error.status = 400;
      return next(error);
    }

    const NewComment = new Comment({
      userName: userName ? userName : "Anonymous",
    });

    await NewComment.save();

    res.status(201).send(NewComment);
  }
);

export { router as NewCommentRouter };
