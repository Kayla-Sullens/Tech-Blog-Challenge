const { User } = require('../models');

const userData = [
  {
    username: "Kayla",
    email: "kayla@gmail.com",
    password: "password12345"
  },
  {
    username: "Marie",
    email: "marie@gmail.com",
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;