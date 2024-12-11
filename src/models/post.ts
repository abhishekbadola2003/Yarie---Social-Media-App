import mongoose from "mongoose";
import { CommentDoc } from "./comment";

export interface PostDoc extends mongoose.Document {
  title: string;
  content: string;
  images: Array<{ src: String }>;
  comments?: Array<CommentDoc>;
}

export interface CreatePostDto {
  title: string;
  content: string;
  images: Array<{ src: String }>;
}

export interface PostModel extends mongoose.Model<PostDoc> {
  build(dto: CreatePostDto): PostDoc;
}

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  images: [
    {
      type: String,
      required: true,
    },
  ],

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

postSchema.statics.build = (createPostDto: CreatePostDto) =>
  new Post(createPostDto);

const Post = mongoose.model<PostDoc, PostModel>("Post", postSchema);

export default Post;
