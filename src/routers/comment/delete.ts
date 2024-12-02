import { error } from "console";
import { NextFunction, Router, response, ErrorRequestHandler } from "express";

const router = Router();

router.post(
    "/api/comment/:commentid/delete/:postId", async (req: Request, res: Response, next: NextFunction) => {
        const { postId, commentid } = req.params;

        if (!commentid || !postId) {
            const error = new Error("commentid or postid is missing", 400) as CustomError
            error.status = 400
            next(error)
        }

        try {
            await commentid.findOneAndDelete(_id: postId)
        } catch (err) {
            next(error("Comment cannot be updated."))
        }
        
})