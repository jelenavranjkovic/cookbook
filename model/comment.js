const sql = require("../db.js");

const Comment = function(comment) {
  this.id = comment.id;
  this.date = post.date;
  this.content = post.content;
  this.user_id = post.user_id;
};

Comment.getAllComments = (postId, result) => {
  sql.query("SELECT c.*, u.username FROM comments c join users u on u.id = c.user_id WHERE post_id = ?", postId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Comment;
