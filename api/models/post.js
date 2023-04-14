const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  dateCreated: {
    type: Date,
    default: () => Date.now()
  },
  likes: {type: Number, min: 0, default: 0}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;