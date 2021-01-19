const route = require("express").Router();
const mongoose = require("mongoose");
const Footer = mongoose.model("Footer");
route.get("/", (req, res) => {
  Footer.findOne({ footerId: 1 })
    .then((data) => {
      if (data === null) {
        res.json("no data");
      } else {
        res.json(data);
      }
    })
    .catch((err) => console.log(err));
});
route.put("/", (req, res) => {
  Footer.findOneAndUpdate(
    { footerId: 1 },
    {
      $set: {
        description: req.body.description,
        email: req.body.email,
        phNumber: req.body.phNumber,
        location: req.body.location,
      },
    },
    { new: true }
  )
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err));
});

route.post("/", (req, res) => {
  Footer.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
module.exports = route;
