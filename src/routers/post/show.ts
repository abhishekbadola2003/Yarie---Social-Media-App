import { Router, Request, Response, NextFunction } from "express";
import Post from "../models/post";

const router = Router();

router.get(
  "/api/post/show/:id",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    if (!id) {
      const allPosts = await Post.find();
      res.status(200).json(allPosts);
      return;
    }

    const post = await Post.findOne({ _id: id });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json(post);
  }
);

export { router as showPostRouter };
