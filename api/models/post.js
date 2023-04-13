const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: { type: String, required: false },
  photoUrl: { type: String, required: false }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
