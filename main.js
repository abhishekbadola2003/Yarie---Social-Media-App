"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var src_1 = require("./src");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    optionsSuccessStatus: 200,
}));
app.use((0, body_parser_1.urlencoded)({
    extended: true,
}));
app.use((0, body_parser_1.json)());
app.use(src_1.newPostRouter);
app.use(src_1.deleteCommentRouter);
app.use(src_1.deletePostRouter);
app.use(src_1.showPostRouter);
app.use(src_1.NewCommentRouter);
app.use(src_1.updatePostRouter);
app.all("*", function (req, res, next) {
    var error = new Error("not found!");
    error.status = 404;
    next(error);
});
