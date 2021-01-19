const route = require("express").Router();
const mongoose = require("mongoose");
const Banner = require('../models/banner');

route.get("/", (req, res) => {
    Banner.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
});

route.post("/", (req, res) => {
    Banner.create(req.body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
});

route.get("/:banner_id", (req, res) => {
    Banner.findOne({ _id: req.params._id })
        .populate('usercart')
        .then((data) => {
            if (data === null) {
                res.json("no such banner available");
            } else {
                res.json(data);
            }
        })
        .catch((err) => console.log(err));
});
route.put("/:banner_id", (req, res) => {
    Banner.findByIdAndUpdate(req.params.banner_id, {
        $set: req.body
    }, { new: true })
        .then((data) => {
            if (data === null) {
                res.json("no such banner available");
            } else {
                res.json(data);
            }
        })
        .catch((err) => console.log(err));
});
route.delete("/:banner_id", (req, res) => {
    Banner.findByIdAndRemove(req.params.banner_id)
        .then((data) => {
            if (data === null) {
                res.json("no such banner available");
            } else {
                res.json(data);
            }
        })
        .catch((err) => console.log(err));
});

module.exports = route;