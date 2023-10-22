const { Blog } = require("../models");

const blogData = [
 
  {
    title: "Why is MVC so important?",
    contents: "MVC allows developers to maintain a true separation of concepts, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1,
  },
  {
    title: "Authentication Vs Authorization",
    contents:
      "Authentication and authorization are different in that authentication means you confrim your own identidy, whereas authorization means you're allowed to access the system.",
    user_id: 2,
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;