const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const applicationSchema = new mongoose.Schema({
    applicationBy:{
        type : ObjectId,
        ref : "Designer"
    },
    boutiqueName :{
        type :String,
        required:true
    },
    productType :{
        type :String,
        required : true
    },
    productsSold :{
        type :String,
        required :true
    },
    businessDetails :{
        type :String,
        required :true
    },
    socialMedia:{
        type :String,
        required :true
    },
    images:[],
    marketPlaceInfo:{
        type :String,
        required :true
    },
    infoCheck: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model("Application",applicationSchema)

const designerSchema = new mongoose.Schema({
    displayPic: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    admin: {
        type: Boolean,
        default: false
    },
    application: [applicationSchema],
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Designer', designerSchema)