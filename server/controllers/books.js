const db = require("../database/models");

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
    create: async function(req,res) {
      try {
        const user = req.params;
        const id = user.id
        const {title, author, award_year, Image} = req.body;
        const userById = await User.findById(id);
        const book = await Book.create({
            title,
            authors,
            award_year,
            user: userById,
            Image
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
        const userbyBook = await (await db.Book.findById(id)).populate('user');
        res.send(userbyBook);
    },
    booksByUser: async function(req, res) {
      console.log('entering books by user...');
      console.log('req.params: ', req.params);
      console.log('req.query: ', req.query)
      const { params: { id } } = req;
      console.log('userId: ', id);
      const booksByUser = await db.User.findById(id).populate('books');
      console.log('booksByUser: ', JSON.stringify(booksByUser, null, 2));

      res.status(200).json(booksByUser.books);
    }
}