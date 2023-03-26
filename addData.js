// File Description: This is the main file for our server stuff and backend. The route handling (GET, POST, DELETE) and all other updates are in the route folder.
// const mongoose = require('mongoose');

// // Make the express app listen to server:
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         // After connected to DB, then listen to express application:
//         app.listen(processs.env.PORT, () => {
//             console.log("Conneted to the database and listening on port 3000!");
//         });
//     })
//     .catch((error) => {
//         // Log any errors to console:
//         console.log(error);
//     });

const mongoose = require("mongoose");
const Fuel = require('./models/fuel.js'); 
const profile = require('./models/clientProfile.js');

//Set up database connection
mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true})
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('failed');
});


// profile.db.dropCollection('clientprofiles');
profile.create({name: "Mary", address: "123 Random Circle", address2: "", city: "Houston", state: "TX", zipcode: "88888"}).then((a, b) => a.save());
profile.create({name: "John", address: "24 Houston Circle", address2: "", city: "Houston", state: "TX", zipcode: "77777"}).then((a, b) => a.save());

// Fuel.db.dropCollection('fuel');
Fuel.create({gallons: "25", date: "2023-02-08", price: "2", total: "50"}).then((a, b) => a.save());
Fuel.create({gallons: "15", date: "2023-10-18", price: "2", total: "30"}).then((a, b) => a.save());

console.log('done');
