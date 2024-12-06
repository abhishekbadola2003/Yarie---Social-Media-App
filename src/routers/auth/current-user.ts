import { Request, Response, Router, NextFunction } from "express";
import { currentUser } from "common/src/services";
    
    
const router = Router();

router.get{
    '/current user', currentUser, async (req: Request, res: Response, next: NextFunction) => {
        
    }
    
}

export { router as currentUser}