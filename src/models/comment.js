"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var commentSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Post",
    },
});
var Comment = mongoose_1.default.models.Comment || mongoose_1.default.model("Comment", commentSchema);
exports.default = Comment;
