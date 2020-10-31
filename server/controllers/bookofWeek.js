const db = require("../database/models");

module.exports = {
    GetBookofWeek: function(req, res) {
      console.log('entering findAll')
      console.log(db.BookofWeek)
      db.BookofWeek
        .findOne() //note to self: changed from class example from query to params b/c not query
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    SetBookofWeek: async function(book) {
        console.log(JSON.stringify(book, null, 2));
        const {
            Title,
            Author,
            Award_Year,
            Image
        } = book;
        console.log('entering findAll');
        await db.BookofWeek.deleteOne({});
        await db.BookofWeek.create({
            Title,
            Author,
            Award_Year,
            Image
        })        
    }
}