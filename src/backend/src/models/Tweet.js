const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    author: String,
    thumbnail: String,
    content: String,
    coments: [{
        author: String,
        thumbnail: String,
        content: String,
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }],
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Tweet", TweetSchema);