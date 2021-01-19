
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    userId: {
        type: String,
        require: true
    },
    customerName: {
        type: String
    },
    customerMobileNumber: {
        type: Number
    },
    customerAddress: {
        type: String
    },
    customerLandMark: {
        type: String
    },
    customerPincode: {
        type: String
    },
    customerCity: {
        type: String
    },
    customerState: {
        type: String
    },
    isHome: {
        type: Boolean,
        default: false
    },
    isWork: {
        type: Boolean,
        default: false
    },
    isDefault: {
        type: Boolean,
        default: false
    }
});

const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;