import { Request, Response, Router, NextFunction } from "express";
import { User } from "./user";

const router = Router();

router.post(
  "/signin",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!User) {
      return next(new Error("user doesn't exist create new."));
    }
    console.log("Create a new account.");

    if (user) return new Error("user with the same credentials already exists");

    const newUser = new User({
      email,
      password,
    });

    res.status(201).send(newUser);
  }
);
