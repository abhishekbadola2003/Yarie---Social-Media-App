import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

console.log("Compiling Post model...");
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
console.log("Post model compiled successfully");

export default Post;
