const User = require("../models/user");
const TokenGenerator = require("../models/token_generator");

const UsersController = {
  Index: (req, res) => {
    User.find(async (err, users) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ users: users, token: token });
    });
  },
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  },
  Info: (req, res) => {
    User.findOne({ user: req.body.user_id }, (err, user) => {
      if (err) {
        res.status(500).json({ message: 'Internal Server Error' });
      }
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json({ 
          name: user.name,
          email: user.email, 
          avatar: user.avatarUrl});
      }
    });
  }
};

module.exports = UsersController;
