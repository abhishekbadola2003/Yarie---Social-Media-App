"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});
console.log("Compiling Post model...");
var Post = mongoose_1.default.models.Post || mongoose_1.default.model("Post", postSchema);
exports.default = Post;
