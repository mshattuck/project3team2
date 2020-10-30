const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookofWeekSchema = new Schema ({
    Title: {
        type: String
    }, 
    Author: {
        type: String
    },
    Award_Year: {
        type: Number
    },
});

const BookofWeek = mongoose.model("BookofWeek", bookofWeekSchema);

module.exports = BookofWeek;