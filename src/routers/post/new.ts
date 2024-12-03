import {
  Router,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import Post from "../models/post";
import { error } from "console";

const router = Router();

router.post(
  "/api/post/new",
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, content } = req.body;

    if (!title || !content) {
      const error = new Error("ttitle and content are required") as CustomError;
      error.status = 400;
      return next(error);
    }

    const newPost = new Post({
      title,
      content,
    });

    await newPost.save();

    res.status(201).send(newPost);
  }
);

// const router = Router();

// router.post(
//   "/api/post/new/:id",
//   async (req: Request, res: Response): Promise<any> => {
//     try {
//       console.log(req.body);
//       const { id } = req.body;
//       if (!id) {
//         const error = new Error("post id is required!") as CustomError;
//       }

//       return res.status(200).json(id);

//       await Post.findOne({ _id: id });
//     } catch (err) {
//       console.log(err);

//       new Error("Post cannot be showed.");
//     }
//   }
// );
export { router as newPostRouter };
