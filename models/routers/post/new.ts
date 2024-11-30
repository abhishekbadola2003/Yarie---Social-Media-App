import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Post from "./post";
import { error } from "console";
const router = Router();

router.post(
  "./api/post/show/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;

    if (!id) {
      const allPost = await Post.find();
      return res.status(200).send(allPost);
    }

    const post = await Post.findOne({ _id: id }).populate("comments");

    res.status(200).send(post);
  }
);
export { router as showPostRouter };
