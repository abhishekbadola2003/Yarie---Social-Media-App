import { NextFunction, Router, Request, Response } from "express";

const router = Router();

router.post(
  "/api/post/update/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params;
  }
);
