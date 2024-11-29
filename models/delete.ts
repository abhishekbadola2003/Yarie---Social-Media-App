import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Post from "./routers/post/post";
const router = Router();

router.delete(
  "./api/post/delete/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
      const error = new Error("post id is required!") as CustomError;
    }

    try {
      await Post.findOneAndRemove({ _id: id });
    } catch (err) {}
  }
);
export { router as deletePostRouter };
