import { Request, Response, NextFunction, Router } from "express";
import { User } from "../auth/user";
import { Jwt } from "jsonwebtoken";

const router = Router();

router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user)
      return next(new Error("user with the same credentials already exists"));

    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    req.session = {
      jwt: jwt.sign({ email, userId: newUser._id }, process.env.JWT_KEY),
    };
    res.status(201).send(newUser);
  }
);

export { Router as signupRouter };
