import { Router, Request, Response, NextFunction } from "express";
import Post from "../../models/post"; // Ensure Post model is correctly imported

const router = Router();

// Route to get all posts
router.get(
  "/api/post/show",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allPosts = await Post.find(); // Fetch all posts
      res.status(200).send(allPosts); // Send all posts in response
    } catch (err) {
      next(new Error("Failed to fetch posts.")); // If there's an error, pass to error handler
    }
  }
);

// Route to get a specific post by id
router.get(
  "/api/post/show/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; // Extrac
  }
);
