const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Aneesha:Aneesha@sample.k02k4.mongodb.net/Sample?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (!err) {
      console.log("Mongoose Connected");
    } else {
      console.log("Error while connecting", err);
    }
  }
);

require("./item");
require("./contact");
require("./pincodes");
require("./user");
require('./PaymentModel');
require("./footer");
require('./blog');