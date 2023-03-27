//Schema for the clientProfile table
const mongoose = require('mongoose')

const profileSchema=new mongoose.Schema({
    username:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    address2:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        require:true
    },
    zipcode:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("clientProfile", profileSchema)