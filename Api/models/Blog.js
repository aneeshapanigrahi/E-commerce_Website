
const mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({

    userId: {
        type: String,
        require: true
    },

    title: {
        type: String
    },

    body: {
        type: String
    },

    imageUrl: {
        type: String
    },

    username: {
        type: String
    },

    likes: {
        type: Number
    }

});

const blog = mongoose.model('Blog', blogSchema);

module.exports = blog;