
const route = require('express').Router();
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

route.get('/', (req, res) => {
    Blog.find()
        .then((blogs) => {
            let users = {};
            let newBlogs = blogs.map((blog) => {
                if (users[blog.username] === true) {
                    console.log("Your another blog already present in the list");
                } else {
                    users[blog.username] = true;
                    return blog;
                }
            });
            newBlogs = newBlogs.filter((newblog) => {
                return newblog !== undefined;
            });
            res.setHeader("Content-Type", "application/json");
            res.send(newBlogs);
        })
        .catch((err) => {
            res.send(err);
        })
})


route.get('/:userId', (req, res) => {
    Blog.find({ userId: req.params.userId })
        .then((blogs) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(blogs);
        })
        .catch((err) => {
            res.status(500).send(err);
            console.log("Error while retrieving the posts");
        })
})


route.post('/:userId', (req, res) => {
    const blog = new Blog();

    blog.userId = req.params.userId;
    blog.title = req.body.title;
    blog.body = req.body.body;
    blog.imageUrl = req.body.imageUrl;
    blog.username = req.body.username;
    blog.likes = req.body.likes;

    blog.save((err, doc) => {
        if (!err) {
            res.status(201).send(doc);
            console.log("Blog posted");
        } else {
            res.status(501).send(err);
            console.log("Error while posting");
        }
    });

});

module.exports = route;