require("./models/db");
const express = require("express");
const apiRoute = require("./routes/api");
const allProductsRoute = require("./routes/allProduct");
const pincodeRoute = require("./routes/Pincode");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
const designerRoute = require("./routes/designer");
const footerRoute = require("./routes/UpdateFooter");
const paymentRoute = require("./routes/Payment");
const BlogRoute = require('./routes/Blog');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/api", apiRoute);
app.use("/all", allProductsRoute);
app.use("/pin", pincodeRoute);
app.use("/admin", adminRoute);
app.use("/designers", designerRoute);
app.use("/updateFooter", footerRoute);
app.use("/paynow", paymentRoute);
app.use("/banner", require("./routes/banner"))
app.use('/blog', BlogRoute);
app.use('/customize', require('./routes/customization'));
app.listen(8000, () => console.log("Server start running on 8000"));
