const route = require("express").Router();
const mongoose = require("mongoose");
const Item = mongoose.model("Item");
//to show all products
route.get("/", (req, res) => {
  Item.find({})
    .then((items) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(items);
    })
    .catch((err) => {
      res.status(500).send("Error while retrieving the data...");
    });
});
//temp
route.post("/", (req, res) => {
  Item.create(req.body)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => console.log(err));
});

// temp delete
route.delete("/", (req, res) => {
  Item.remove({})
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err));
});

//To get a details of a specific product
route.get("/product/:productId", (req, res) => {
  Item.find({ productId: req.params.productId })
    .then((item) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(item);
    })
    .catch((err) => {
      res.status(500).send("Error while retrieving the data...");
    });
});

route.get("/products/:searchQuery", (req, res) => {
  Item.find({ productName: { $regex: req.params.searchQuery, $options: "i" } })
    .then((data) =>
      res.json({ data: data, searchQuery: req.params.searchQuery })
    )
    .catch((err) => console.log(err));
});

module.exports = route;
