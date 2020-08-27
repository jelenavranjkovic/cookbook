module.exports = app => {
  const controller = require("../controllers/controller.js");

  // Create a new Customer
  app.post("/login", controller.login);

  app.get("/getAllPosts/type/:type", controller.getAllPosts)

  app.get("/post/id/:id/comments", controller.getPostComments);
};
