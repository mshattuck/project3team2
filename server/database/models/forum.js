const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema ({
    books: [
        {type: mongoose.Schema.Types.ObjectId,ref:'Book'}
    ],
    users: [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ],
    comments: {
        type: String
    }
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;