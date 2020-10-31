const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    Title: {
        type: String
    }, 
    Author: {
        type: String
    },
    Award_Year: {
        type: Number
    },
    users: [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ],
    Image: {
        type: String
    } 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;