const route = require("express").Router();
const mongoose = require("mongoose");
const item = require("../models/item");
const Item = mongoose.model("Item");
route.post("/", (req, res) => {
  Item.findOne({
    productId: req.body.productId,
    productName: req.body.productName,
  })
    .then((data) => {
      if (data !== null) {
        res.json("Exists");
      } else {
        let newItem = new Item({
          productId: req.body.productId,
          category: req.body.category,
          productName: req.body.productName,
          itemAmount: req.body.itemAmount,
          originalAmount: req.body.originalAmount,
          itemImageUrl: req.body.itemImageUrl,
          previewImages: [req.body.url1, req.body.url2, req.body.url3],
          subCategory: req.body.subCategory,
          availability: req.body.availability,
          stocks: req.body.stocks,
          description: req.body.description,
        });
        newItem.save((err, doc) => {
          if (!err) res.json(doc);
          else res.json(err);
        });
      }
    })
    .catch((err) => console.log(err));
});
route.put("/updatePrice/:productId/:price", (req, res) => {
  Item.findOne({ productId: req.params.productId }).then((data) => {
    if (data === null) {
      res.json("no data");
    } else {
      Item.findOneAndUpdate(
        { productId: req.params.productId },
        { $set: { itemAmount: req.params.price } },
        { new: true }
      )
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
    }
  });
});
route.delete("/delete/:subCategory", (req, res) => {
  Item.findOne({ subCategory: req.params.subCategory }).then((data) => {
    if (data === null) {
      res.json("no data");
    } else {
      Item.deleteMany({ subCategory: req.params.subCategory })
        .then((resp) => res.json(resp))
        .catch((err) => console.log(err));
    }
  });
});
route.delete("/delete/:productId", (req, res) => {
  Item.findOne({ productId: req.params.productId })
    .then((data) => {
      if (data === null) {
        res.json("no data");
      } else {
        Item.deleteOne({ productId: req.params.productId })
          .then((resp) => res.json(resp))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});
route.delete("/deleteAll", (req, res) => {
  Item.remove({})
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => console.log(err));
});

exports = module.exports = route;
