const User = require("../model/user.js");
const Post = require("../model/post.js")

// Create and Save a new user
exports.login = (req, res) => {
  User.login(req.body.username, req.body.password, (err, data) => {
    console.log(req.body.username, req.body.password);
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
      return;
    }

    if (data.length) {
      console.log('Found user');
      res.status(200).send(data[0]);
      return;
    }

    res.status(401).send({
      message:
        "No user with that credencials found."
    });
  });
};

exports.getAllPosts = (req, res) => {
  Post.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
      return;
    }
    res.status(200).send(data);
  });

};
