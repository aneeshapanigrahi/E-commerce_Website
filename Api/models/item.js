const mongoose = require("mongoose");

let itemSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    itemAmount: {
      type: Number,
      required: true,
    },
    originalAmount: {
      type: Number,
      required: true,
    },
    itemImageUrl: {
      type: String,
      required: true,
    },
    previewImages: {
      type: Array,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    stocks: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const item = mongoose.model("Item", itemSchema);
module.exports = item;
