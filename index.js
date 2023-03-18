const express = require("express")
const path = require('path');
const collection = require("./mongo")
const cors = require("cors")
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors());

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Define a route for the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Define a route for the home page
app.get('/clientProfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientProfile.html'));
});

// Define a route for the fuel page
app.get('/fuel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fuel.html'));
});

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
  res.redirect("/fuel");
});


// Define a route for the fuel quote history page
let fuelhistory = [
  {userid: 1, gallons: 10, price: 5, total: 50 },
  {userid: 1, gallons: 20, price: 5, total: 100 },
  {userid: 1, gallons: 30, price: 7, total: 210 },
  {userid: 2, gallons: 40, price: 7, total: 280 },
  {userid: 1, gallons: 30, price: 20, total: 500 }
];
//uses ejs file instead of static html to display fuel history
app.get('/fuelhistory', (req, res) => {
  res.render('fuelhistory', {fuelList: fuelhistory})
});
// app.get('/fuelhistory', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'fuelhistory.html'));
// });


// Define a route for the Registration page
app.get('/clientRegistration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'clientRegistration.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});