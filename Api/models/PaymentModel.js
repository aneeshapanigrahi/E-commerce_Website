
const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    txnid: {
        type: String
    },
    email: {
        type: String
    },
    amount: {
        type: Number
    },
    productinfo: {
        type: String
    },
    firstname: {
        type: String
    },
    userId: {
        type: String
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);