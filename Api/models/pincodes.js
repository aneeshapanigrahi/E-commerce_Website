const mongoose = require("mongoose");

const PincodeSchema = new mongoose.Schema({
  pincode: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
});

const Pincode = mongoose.model("Pincode", PincodeSchema);
module.exports = Pincode;
