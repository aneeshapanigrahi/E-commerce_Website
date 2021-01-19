const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  usercart: {
    type: Array,
    default: [],
  },
  cartWishList: {
    type: Array,
    default: [],
  },
  trendingWishList: {
    type: Array,
    default: [],
  },
  orderHistory: {
    type: Array,
    default: [],
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  },
  number: {
    type: Number
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 8
  },
  admin: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const UserData = mongoose.model("UserData", UserSchema);
module.exports = UserData;
