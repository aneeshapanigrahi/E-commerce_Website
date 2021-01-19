const route = require("express").Router();
const mongoose = require("mongoose");
const Item = mongoose.model("Item");
const Contact = mongoose.model("Contact");
const UserData = mongoose.model("UserData");
var crypto = require("crypto");
const uniqid = require("uniqid");
const { createIndexes } = require("../models/item");

// -----------------------------New-------------------------------------------------
//-------------/checking in the usercart for already existing item--------------------------
route.get("/check/:_id/cart/:productId", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data == null) {
        res.json("User not found");
      } else {
        var temp;
        data.usercart.forEach((element) => {
          if (element.prodId === req.params.productId) temp = true;
        });
        temp === true ? res.json(true) : res.json(false);
      }
    })
    .catch((err) => console.log(err));
});
//to add a new item to cart--------------------------------->
route.post("/:_id/cart/:productId", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data === null) {
        res.json("User not found");
      } else {
        data.usercart.push(req.body);
        data.save();
        res.json(data);
      }
    })
    .catch((err) => console.log(err));
});

// to add a new item to wishList
route.post("/:_id/cartWishList/:productId", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data === null) {
        res.json("User not found");
      } else {
        let temp, i;
        data.cartWishList.forEach((x, index) => {
          if (x.prodId === req.body.prodId) {
            temp = true;
            i = index;
          }
        });
        if (temp) {
          data.cartWishList.splice(i, 1);
          data.save();
          res.json({ data: data, new: false });
        } else {
          data.cartWishList.push(req.body);
          data.save();
          res.json({ data: data, new: true });
        }
      }
    })
    .catch((err) => console.log(err));
});
///to check if an item exist in wishlist
route.get("/check/:_id/cartWishList/:productId", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data === null) {
        res.json("User not found");
      } else {
        let temp = false;
        data.cartWishList.forEach((x) => {
          if (x.prodId === req.params.productId) {
            temp = true;
          }
        });
        res.json(temp);
      }
    })
    .catch((err) => console.log(err));
});

// To fetch all the cart wishlist data for a given user
route.get("/:_id/wishList/cartWishList/", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data === null) {
        res.json("user not found");
      } else {
        res.json(data.cartWishList);
      }
    })
    .catch((err) => console.log(err));
});

// To fetch all the cart data for given user
route.get("/:_id/cart/", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((data) => {
      if (data === null) {
        res.json("user not found");
      } else {
        res.json(data.usercart);
      }
    })
    .catch((err) => console.log(err));
});

//customizing the quantity depending on user-pref

route.put("/:_id/customize/cart/:productId/:quantity", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((userData) => {
      if (userData === null) {
        res.json("user not found");
      } else {
        UserData.update(
          {
            _id: req.params._id,
            "usercart.prodId": req.params.productId,
          },
          { $set: { "usercart.$.quantity": req.params.quantity } },
          { new: true }
        )
          .then((data) => res.json(data))
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});
/////////------------------------removing a product from cart---------------------///////////
route.put("/:_id/customize/cart/:productId", (req, res) => {
  UserData.findOne({ _id: req.params._id }).then((userData) => {
    if (userData === null) {
      res.json("user not found");
    } else {
      UserData.update(
        {
          _id: req.params._id,
        },
        { $pull: { usercart: { prodId: req.params.productId } } },
        { safe: true }
      )
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
    }
  });
});
// sending data when buynow is clicked
// route.post("/:_id/buyNow/", (req, res) => {
//   console.log(req.body);
// });

//getting the quantity of items in userCart
route.get("/:_id/quantity", (req, res) => {
  UserData.findOne({ _id: req.params._id })
    .then((userData) => {
      res.json(userData.usercart);
    })
    .catch((err) => console.log(err));
});

// ------------------------------NEw------------------------------------------------>

// To Post the data for given user
route.post("/place/:_id/:size", (req, res) => {
  let item = new Item();
  item._id = req.params._id;
  item.ProductId = uniqid();
  item.isWishlist = req.body.isWishlist;
  item.discount = req.body.discount;
  item.size = req.params.size;
  item.itemAmount = req.body.itemAmount;
  item.itemImageUrl = req.body.itemImageUrl;

  item.save((err, doc) => {
    if (!err) {
      res.status(201).send(doc);
    } else {
      res.status(501).send(err);
    }
  });
});

// To delete the data of the cart
route.delete("/remove/:ProductId", (req, res) => {
  Item.findOne({ ProductId: req.params.ProductId })
    .then((item) => {
      if (item !== null) {
        item.deleteOne();
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Item is deleted successfully</h1>");
      } else {
        res.status = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Item Not Found</h1>");
      }
    })
    .catch((err) => console.log(err));
});

// to post the details about the customer
route.post("/address/:_id/:isWork/:isHome/:isDefault", (req, res) => {
  let contact = new Contact();
  contact._id = req.params._id;
  contact.customerName = req.body.customerName;
  contact.customerMobileNumber = req.body.customerMobileNumber;
  contact.customerAddress = req.body.customerAddress;
  contact.LandMark = req.body.LandMark;
  contact.customerPincode = req.body.customerPincode;
  contact.customerCity = req.body.customerCity;
  contact.customerState = req.body.customerState;
  contact.isHome = req.params.isHome;
  contact.isWork = req.params.isWork;
  contact.isDefault = req.params.isDefault;

  if (req.params.isDefault === "true") {
    Contact.updateMany(
      { _id: req.params._id },
      { isDefault: false },
      { new: true }
    )
      .then(() => {
        console.log("Succesfully Updated");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  contact.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(err);
    }
  });
});

// To get the request of the customer detail
route.get("/address/:_id/", (req, res) => {
  Contact.find({ _id: req.params._id })
    .then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.send(contacts);
    })
    .catch((err) => {
      res.send("Error while retrieving the contact detail of customer...");
    });
});

// To delete an address
route.delete("/address/:_id/:addId", (req, res) => {
  Contact.findOneAndDelete({ _id: req.params._id, _id: req.params.addId })
    .then((doc) => {
      res.json("Your address is deleted successfully");
    })
    .catch((err) => console.log(err));
});
exports = module.exports = route;
