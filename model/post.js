const sql = require("../db.js");

const Post = function(post) {
  this.id = post.id;
  this.type = post.type;
  this.title = post.title;
  this.content = post.content;
};

Post.getAll = (result) => {
  sql.query("SELECT * FROM post", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

module.exports = Post;
