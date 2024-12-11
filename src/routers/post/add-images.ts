import { Router, Request, Response, NextFunction } from "express";
import Post from "../../models/post";
import { BadRequestError, uploadImages } from "../../../common/src";
import fs from "fs";
import path from "path";

const router = Router();

router.post(
  "/post/:id/add/images",
  uploadImages,
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { imageIds } = req.body;

    if (!req.files) return next(new BadRequestError("images are required."));

    let images: Array<Express.Multer.File>;
    if (typeof req.files == "object") {
      images = Object.values(req.files);
    } else {
      images = req.files ? [...req.files] : [];
    }

    const imagesArray = images.map((file: Express.Multer.File) => {
      let srcObj = {
        src: `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      };
      fs.unlink(path.join("/upload/" + file.filename), () => {});
      return srcObj;
    });

    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { $push: { images: { $each: imagesArray } } }
    );
    res.status(200).send(post);
  }
);

export { router as addImagesRouter };
