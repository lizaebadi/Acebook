const Post = require("../models/post");
const TokenGenerator = require("../models/token_generator");

const PostsController = {
  Index: (req, res) => {
    Post.find(async (err, posts) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ posts: posts, token: token });
    });
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save(async (err) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
  addLike: async (req, res) => {
  const post_id = req.body.post_id 
  const post = await Post.findById(post_id);
  post.likes += 1;
  console.log(post_id);
  await post.save();
  // console.log(req)
  const token = await TokenGenerator.jsonwebtoken(req.user_id)
  res.status(201).json({ message: 'OK', token: token });
  }
};

module.exports = PostsController;
