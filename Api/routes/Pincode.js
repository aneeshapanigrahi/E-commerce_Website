const mongoose = require("mongoose");
const route = require("express").Router();
const Pincode = mongoose.model("Pincode");

route.get("/", (req, res) => {
  Pincode.find({})
    .then((pins) => res.json(pins))
    .catch((err) => console.log(err));
});

route.get("/:userPin", (req, res) => {
  Pincode.findOne({ pincode: req.params.userPin })
    .then((item) => {
      if (item === null) {
        res.json(false);
      } else res.json(item);
    })
    .catch((err) => console.log(err));
});

route.post("/", (req, res) => {
  Pincode.create(req.body)
    .then((pin) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(pin);
    })
    .catch((err) => console.log(err));
});

route.delete("/", (req, res) => {
  Pincode.remove({})
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err));
});

module.exports = route;
