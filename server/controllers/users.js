const db = require('../database/models');

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
    create: async function(req,res) {
        try {
            const { book: { id } } = req.params;
            const {username, password} = req.body;
            const bookById = await db.Book.findById(id);
            const book = await db.User.create({
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
    }
}