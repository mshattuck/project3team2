const mongoose = require("mongoose");
const db = require("../models");
const bookList = require('./booklist.json')
const userList = require('./userlist.json')

// This file empties the Books and Users collections and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/dogeard',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookList))
  .then(data => {
    console.log(data.result.n + " book records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userList))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });