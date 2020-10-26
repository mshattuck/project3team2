const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.User
          .find(req.params) //note to self: changed from class example from query to params b/c not query; deleted sort
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: async function(req,res) {
        try {
            book = req.params;
            id = book.id
            const {username, password} = req.body;
            const bookById = await Book.findById(id);
            const book = await User.create({
                name,
                password,
                book: bookById
            });
            await user.save();
            res.send()
        }
        catch(err) {
            res.status(422).json(err)
        }
    },
    booksByUser: async function(req,res) {
        const {id} = req.params;
        const booksByUser = await (await User.findById(id)).populate('book');
        res.send(booksByUser)
    }
}