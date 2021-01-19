const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  description: { type: String },
  phNumber: { type: Number },
  email: { type: String },
  location: { type: String },
  footerId: { type: Number },
});

const Footer = mongoose.model("Footer", footerSchema);
module.exports = Footer;
