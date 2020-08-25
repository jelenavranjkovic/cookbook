const User = require("../model/user.js");

// Create and Save a new Customer
exports.create = (req, res) => {
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
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};
