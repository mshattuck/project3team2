const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      console.log('entering findAll')
      console.log(db.Book)
      db.Book
        .find(req.params) //note to self: changed from class example from query to params b/c not query
        .sort({ award_year: -1 }) //note to self: changed from date to award_year to fit dogeard book schema
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
      db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: async function(req,res) {
      try {
        user = req.params;
        id = user.id
        const {title, author, award_year} = req.body;
        const userById = await User.findById(id);
        const book = await Book.create({
            title,
            authors,
            award_year,
            user: userById
        });
        await book.save();
        res.send()
      }
      catch(err) {
        res.status(422).json(err)
      }
    },    
    userbyBook: async function(req,res) {
        const {id} = req.params;
        const userbyBook = await (await Book.findById(id)).populate('user');
        res.send(userbyBook);
    }
}