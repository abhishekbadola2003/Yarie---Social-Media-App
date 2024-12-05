import { Request, Response, Router, NextFunction } from "express";
import { User } from "./user";
import { Jwt } from "jsonwebtoken";
import { Authenticationservice } from "common/src/services/authentication";
const router = Router();

router.post(
  "/signin",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!User) {
      return next(new Error("user doesn't exist create new."));
    }

    const isEqual = await Authenticationservice.Pwdcompare(
      user.password,
      password
    );
    if (!isEqual) return next(new Error("wrong credentials"));

    const token = jwt.sign({
      email,
      userId: user,
      _id,
    });
  }
);
