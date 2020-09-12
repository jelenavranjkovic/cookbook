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

    sql.query("SELECT * FROM post WHERE id = ?", postId, (err1, res1) => {
        var data = new Object();
        data.comments = res;
        data.title = res1[0].title;
        data.content = res1[0].content;
        console.log(data)
        result(null, data);
    })
  });
};

Comment.create = (postId, content, userId, result) => {
  sql.query("INSERT INTO comments (date, content, user_id, post_id) values (?, ?, ?, ?)", [new Date().toISOString().slice(0, 19).replace('T', ' '), content, userId, postId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Comment;
