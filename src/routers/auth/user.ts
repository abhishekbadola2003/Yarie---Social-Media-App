import { Authenticationservice } from "common/src/services";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password") || this.isNew) {
    const hashedPassword = Authenticationservice.pwdToHash(
      this.get("password")
    );
  }

  done();
});
export const User = mongoose.model("User", userSchema);
