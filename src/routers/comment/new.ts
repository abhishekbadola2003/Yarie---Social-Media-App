import { Router } from "express";
import { Response, Request, NextFunction, ErrorRequestHandler } from "express";
import Comment from "../../models/comment";
import { error } from "console";
const router = Router();

router.post(
  "./api/models/routers/comment/new/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { NewComment, Content } = req.body;
    } catch (error) {}
  }
);
