const sql = require("../db.js");

const User = function(user) {
  this.username = user.username;
  this.password = user.password;
};

User.login = (newUser, result) => {
  sql.query("SELECT * FROM users WHERE?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;

---------------------------------------------------

const User = require("../model/user.js");

// Create and Save a new user
exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
    level: req.body.level
  });

  // Save Customer in the database
  User.login(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};
