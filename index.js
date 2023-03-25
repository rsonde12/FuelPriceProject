const express = require("express")
const path = require('path');
const cors = require("cors")
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const Fuel = require('./models/fuel.js');

// app.use(express.json());
// app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true}, {useUnifiedTopology: true})
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('failed');
})


// Define a route for the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


// Define a route for the Registration page
app.get('/clientRegistration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientRegistration.html'));
});



// // Define a route for the client profile page
app.get('/clientProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientProfile.html'));
});

//pulls information from front end fuel page
app.post('/clientProfile', function(req,res){
  let clientProfile = {
      userid: "1",
      name: req.body.name,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
  };

  console.log(clientProfile);
  res.redirect("/fuel");
});




// Define a route for the client profile page
let mangeProfile = [
  {userid: 1, name: "Jane Doe", address: "5 street ln" , address2: "1235 street ln", city: "Haven", state: "TX", zipcode: 5980 },
];
//uses ejs file instead of static html to display profile history
app.get('/mangeProfile', (req, res) => {
  res.render('mangeProfile', {profileList: mangeProfile})
});




// Define a route for the fuel page
const Address = "123 Streetname Dr Houston, TX 77204"
app.get('/fuel', (req, res) => {
  res.render('fuel', {userAddress: Address})
});

/*Uses HTML File instead of ejs
app.get('/fuel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fuel.html'));
});*/

//pulls information from front end fuel page
app.post("/fuel", function(req,res){
  let fuel = {
      userid: "1",
      gallons: req.body.gallons,
      date: req.body.date,
      price: req.body.price,
      total: req.body.total
  };

  console.log(fuel);
  Fuel.create(fuel).then((a, b) => a.save());
  res.redirect("/fuel");
});





// Define a route for the fuel quote history page
// let fuelhistory = [
//   {userid: 1, gallons: 10, price: 5, total: 50 },
//   {userid: 1, gallons: 20, price: 5, total: 100 },
//   {userid: 1, gallons: 30, price: 7, total: 210 },
//   {userid: 2, gallons: 40, price: 7, total: 280 },
//   {userid: 1, gallons: 30, price: 20, total: 500 }
// ];
app.get('/fuelhistory', (req, res) => {
  Fuel.find().then(function(fuelhistory,err){
    if(err){
        console.log('error')
    }
    else{
        // console.log(fuelhistory)
        res.render('fuelhistory', {fuelList: fuelhistory});
    }
});
  // res.render('fuelhistory', {fuelList: fuelhistory})
});

/*Uses HTML file instead of ejs
app.get('/fuelhistory', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fuelhistory.html'));
});*/



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});