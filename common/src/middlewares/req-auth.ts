import { Request, response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) return next(new Error("not authorized"));

  next();
};
