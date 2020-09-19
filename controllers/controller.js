const User = require("../model/user.js");
const Post = require("../model/post.js")
const Comment = require("../model/comment.js")

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
  Post.getAll(req.params.type, (err, data) => {
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

exports.getPostComments = (req, res) => {
  Comment.getAllComments(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
      return;
    }
    console.log(data);
    res.status(200).send(data);
  });
}

exports.createComment = (req, res) => {
  Comment.create(req.params.id, req.body.content, req.body.userId, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment."
      });
      return;
    }
    res.status(201).send(data);
  });
}

exports.createPost = (req, res) => {
  Post.create(req.body.type, req.body.title, req.body.content, req.body.creator, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
      return;
    }
    res.status(201).send();
  });
}

exports.deleteComment = (req, res) => {
  Comment.delete(req.body.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
      return;
    }
    res.status(200).send();
  });
}
