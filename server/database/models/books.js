const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: {
        type: String
    }, 
    author: {
        type: String
    },
    award_year: {
        type: Number
    },
    users: [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;