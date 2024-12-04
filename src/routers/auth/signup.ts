import { Request, Response, NextFunction, Router } from "express";
import { user } from "./user";

const router = Router();

router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) return new Error("user with the same credentials already exists");
  }
);

export { Router as signupRouter };
