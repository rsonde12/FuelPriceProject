//Schema for the fuel table
const mongoose = require('mongoose')

const fuelSchema=new mongoose.Schema({
    gallons:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    total:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("fuel", fuelSchema)