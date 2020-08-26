const sql = require("../db.js");

const User = function(user) {
  this.id = user.id;
  this.username = user.username;
  this.password = user.password;
  this.level = user.level;
};

User.login = (username, password, result) => {
  sql.query("SELECT * FROM users WHERE username = ? and password = ?", [username, password], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, res);
  });
};

module.exports = User;
