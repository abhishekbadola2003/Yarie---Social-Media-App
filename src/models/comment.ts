import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  content: {
    type: String,
    require: true,
  },
});

const Comment = mongoose.model("Post", CommentSchema);

export default Comment;
