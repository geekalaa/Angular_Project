
module.exports = app => {

  //Category
  const Category = require("../controllers/categorie.controller.js");

  // Retrieve all Category
  app.get("/categorie", Category.findAll);

  // Create a new Category
  app.post("/categorie/add", Category.create);

  // Retrieve a single Category with CategoryId
  app.get("/categorie/:categoryId", Category.findOne);

  // Update a Category with CategoryId
  app.put("/categorie/update/:categoryId", Category.update);

  // Delete a Category with CategoryId
  app.delete("/categorie/delete/:categoryId", Category.delete);


  //Editor
  const Editor = require("../controllers/editeur.controller.js");

  // Retrieve all Editor
  app.get("/editor", Editor.findAll);

  // Create a new Editor
  app.post("/editor/add", Editor.create);

  // Retrieve a single Editor with editorId
  app.get("/editor/:editorId", Editor.findOne);

  // Update a Editor with editorId
  app.put("/editor/update/:editorId", Editor.update);

  // Delete a Editor with editorId
  app.delete("/editor/delete/:editorId", Editor.delete);


  //Post
  const Post = require("../controllers/post.controller.js");

  // Retrieve all Post
  app.get("/post", Post.findAll);

  // Create a new Post
  app.post("/post/add", Post.create);

  // Retrieve a single Post with postId
  app.get("/post/:postId", Post.findOne);

  // Update a Post with postId
  app.put("/post/update/:postId", Post.update);
   // Update a Post with postId Vues
   app.get("/post/update/:postId/:vues", Post.updatevue);

  // Delete a Post with postId
  app.delete("/post/delete/:postId", Post.delete);

};