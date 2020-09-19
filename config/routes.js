module.exports = app => {
  const controller = require("../controllers/controller.js");

  // Create a new Customer
  app.post("/login", controller.login);

  app.get("/getAllPosts/type/:type", controller.getAllPosts)

  app.get("/post/id/:id/", controller.getPostComments);

  app.post("/post/id/:id/createComment", controller.createComment);

  app.post("/post", controller.createPost);

  app.delete("/comment", controller.deleteComment);

};
