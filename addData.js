// File Description: Sample Data Repository (run `node addData.js` in the terminal to load data into databasae)
const mongoose = require("mongoose");
const Fuel = require('./models/fuel.js'); 
const profile = require('./models/clientProfile.js');
const registration = require('./models/registration.js');

//Set up database connection
mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true})
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('failed');
});

// registration.db.dropCollection('registration');
registration.create({username: "user", password: "pass", email:"user@mail.com"}).then((a, b) => a.save());
registration.create({username: "user2", password: "pass2", email: "user2@mail.com"}).then((a, b) => a.save());

// profile.db.dropCollection('clientprofiles');
profile.create({username: "user", name: "Mary", address: "123 Random Circle", address2: "", city: "Houston", state: "TX", zipcode: "88888"}).then((a, b) => a.save());
profile.create({username: "user2", name: "John", address: "24 Houston Circle", address2: "", city: "Houston", state: "TX", zipcode: "77777"}).then((a, b) => a.save());

// Fuel.db.dropCollection('fuel');
Fuel.create({username: "user", gallons: "25", date: "2023-02-08", price: "2", total: "50"}).then((a, b) => a.save());
Fuel.create({username: "user2", gallons: "15", date: "2023-10-18", price: "2", total: "30"}).then((a, b) => a.save());

console.log('done');
