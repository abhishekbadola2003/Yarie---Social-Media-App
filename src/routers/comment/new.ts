import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Comment from "../models/comment";
import { error } from "console";
import Post from "../models/post";
const router = Router();

router.post(
  "/api/comment/new/:postId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { userName, Content } = req.body;
    const postId = req.params;

    if (!Content) {
      const error = new Error("no content written") as CustomError;
      error.status = 400;
      return next(error);
    }

    const NewComment = new Comment({
      userName: userName ? userName : "Anonymous",
    });

    await NewComment.save();

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: NewComment } },
      { new: true }
    );

    res.status(201).send(updatedPost);
  }
);

export { router as NewCommentRouter };
