const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routers');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true}, {useUnifiedTopology: true})
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('failed');
})

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require("express")
// const path = require('path');
// const cors = require("cors")
// const ejs = require('ejs');
// const bodyParser = require('body-parser');
// const app = express();
// const mongoose = require('mongoose');
// const Fuel = require('./models/fuel.js'); 
// const profile = require('./models/clientProfile.js');
// const clientRegistor = require('./models/registration.js');

// // app.use(express.json());
// // app.use(cors());
// app.use(bodyParser.urlencoded({extended:true}));


// // Set up middleware to serve static and ejs files
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');

// //Set up database connection
// mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true}, {useUnifiedTopology: true})
// .then(() =>{
//     console.log("mongodb connected");
// })
// .catch(() =>{
//     console.log('failed');
// })


// // Define a route for the login page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });


// // // Define a route for the Registration page
// app.get('/ClientRegistration', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'ClientRegistration.html'));
// });

// //pulls information from front end registor page
// app.post("/ClientRegistration", function(req,res){
//   let clientReg = {
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//   };

//   //console.log(clientReg);
//   clientRegistor.create(clientReg).then((a, b) => a.save());
//   res.redirect("/clientProfile");
// });



// // // Define a route for the client profile page
// app.get('/clientProfile', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'clientProfile.html'));
// });

// //pulls information from front end fuel page
// app.post('/clientProfile', function(req,res){
//   let clientProfile = {
//       userid: "1",
//       name: req.body.name,
//       address: req.body.address,
//       address2: req.body.address2,
//       city: req.body.city,
//       state: req.body.state,
//       zipcode: req.body.zipcode
//   };

//   console.log(clientProfile);
//   profile.create(clientProfile).then((a, b) => a.save());
//   res.redirect("/fuel");
// });




// // Define a route for the client profile page
// // let mangeProfile = [
// //   {userid: 1, name: "Jane Doe", address: "5 street ln" , address2: "1235 street ln", city: "Haven", state: "TX", zipcode: 5980 },
// // ];
// //uses ejs file instead of static html to display profile history
// // app.get('/mangeProfile', (req, res) => {
// //   res.render('mangeProfile', {profileList: mangeProfile})
// // });

// app.get('/mangeProfile', (req, res) => {
//   profile.find().then(function(mangeProfile,err){
//     if(err){
//         console.log('error')
//     }
//     else{
//         //console.log(mangeProfile)
//         res.render('mangeProfile', {clientProfileList: mangeProfile});
//     }
//   });
//   // res.render('fuelhistory', {fuelList: fuelhistory})
// });




// // Define a route for the fuel page
// // const Address = "123 Streetname Dr Houston, TX 77204"
// app.get('/fuel', (req, res) => {
//   profile.find({name: "John"}).then(function(record,err){
//     if(err){
//         console.log('error')
//     }
//     else{
//         // console.log(record)
//         const { address, city, state, zipcode } = record[0];
//         // console.log(`${address}, ${city}, ${state} ${zipcode}`);
//         res.render('fuel', {userAddress: `${address}, ${city}, ${state} ${zipcode}`})
//     }
//   });
//   // res.render('fuel', {userAddress: Address})
// });

// //pulls information from front end fuel page
// app.post("/fuel", function(req,res){
//   let fuel = {
//       userid: "1",
//       gallons: req.body.gallons,
//       date: req.body.date,
//       price: req.body.price,
//       total: req.body.total
//   };

//   console.log(fuel);
//   Fuel.create(fuel).then((a, b) => a.save());
//   res.redirect("/fuel");
// });





// // Define a route for the fuel quote history page
// // let fuelhistory = [
// //   {userid: 1, gallons: 10, price: 5, total: 50 },
// //   {userid: 1, gallons: 20, price: 5, total: 100 },
// //   {userid: 1, gallons: 30, price: 7, total: 210 },
// //   {userid: 2, gallons: 40, price: 7, total: 280 },
// //   {userid: 1, gallons: 30, price: 20, total: 500 }
// // ];
// app.get('/fuelhistory', (req, res) => {
//   Fuel.find().then(function(fuelhistory,err){
//     if(err){
//         console.log('error')
//     }
//     else{
//         // console.log(fuelhistory)
//         res.render('fuelhistory', {fuelList: fuelhistory});
//     }
//   });
//   // res.render('fuelhistory', {fuelList: fuelhistory})
// });



// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`)
// });
