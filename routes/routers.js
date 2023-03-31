// File Description: All the route handling (GET, POST, DELETE) and all other updates.
const express = require("express");
const session = require('express-session');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const Fuel = require('../models/fuel.js'); 
const Profile = require('../models/clientprofile.js');
const Registration = require('../models/registration.js');

// Set up session middleware
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Parse request body
router.use(bodyParser.urlencoded({ extended: true }));


// Define a route for the login page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});


// Define a route for the Registration page
router.get('/ClientRegistration', (req, res) => {
  res.render('registration.ejs');
  // res.sendFile(path.join(__dirname, '..', 'public', 'ClientRegistration.html'));
});

//Pulls registration info from front end and saves to database
router.post("/ClientRegistration", async function(req,res){
  let clientReg = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };
  
  const { username } = clientReg;

  //check if username is already in database
  await Registration.findOne({ username }).then(async(user) => {
    if(user !== null){
      // If exists, render the page again with an error message
      console.log('exists');
      res.render('registration.ejs', { error: 'This username has already been taken. Please try again' });
    }
    else{
      console.log('not exist');
      // Save the user ID in the session, the values in database and redirect to profile
      req.session.userId = username;
      // Registration.create(clientReg).then((a, b) => a.save());
      const registeredClient = await Registration.create(clientReg);
      await registeredClient.save();
      res.redirect("/clientProfile");
    }
  });
});



// Define a route for the Profile page
router.get('/clientProfile', (req, res) => {
  res.render('profile.ejs');
  // res.sendFile(path.join(__dirname, '..', 'public', 'clientProfile.html'));
});

//Pulls profile info from front end and saves to database
router.post('/clientProfile', async function(req,res){
  // Check if the user is logged in by checking if the user ID is saved in the session
  if (req.session.userId) {
    let clientProfile = {
        username: req.session.userId,
        name: req.body.name,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    };
    // Profile.create(clientProfile).then((a, b) => a.save());
    const profile = await Profile.create(clientProfile);
    await profile.save();
    res.redirect("/fuel");
  }
  else {
    // If the user is not logged in, redirect to the login page
    console.log(req.session.userId);
    res.redirect('/error');
  }
});


// Define a route for the Manage Profile page
router.get('/mangeProfile', (req, res) => {
  if (req.session.userId) {
    Profile.find({username: req.session.userId}).then(function(mangeProfile,err){
      if(err){
          console.log('error')
      }
      else{
          res.render('mangeProfile', {clientProfileList: mangeProfile});
      }
    });
  }else {
    console.log(req.session.userId);
    res.redirect('/error');
  }
});



// Define a route for the Fuel form page
router.get('/fuel', (req, res) => {
  if (req.session.userId) {
    Profile.find({username: req.session.userId}).then(function(record,err){
      if(err){
          console.log('error')
      }
      else{
          const { address, city, state, zipcode } = record[0];
        Fuel.findOne({username: req.session.userId}).then(function(fuelrecord,err){
          if(err){
            console.log('error');
          }
          else if(fuelrecord){
            // set a variable to true to indicate that the user was found
            var userFound = true;
            res.render('fuel', {userAddress: `${address}, ${city}, ${state} ${zipcode}`, found: userFound});
          }
          else{
            // set a variable to false to indicate that the user was not found
            var userFound = false;
            res.render('fuel', {userAddress: `${address}, ${city}, ${state} ${zipcode}`, found: userFound});
          }
        });
      }
    });
  }else {
    res.redirect('/error');
  }
});

//Pulls fuel info from front end and saves to database
router.post("/fuel", async function(req,res){
  if (req.session.userId) {
    let fuel = {
        username: req.session.userId,
        gallons: req.body.gallons,
        date: req.body.date,
        price: req.body.price,
        total: req.body.total
    };
    // Fuel.create(fuel).then((a, b) => a.save());
    const newfuel = await Fuel.create(fuel);
    await newfuel.save();
    res.redirect("/fuel");
  }else {
    res.redirect('/error');
  }
});


//defining the fuel calculator script
router.get('/calculator.js', function(req, res) {
  if(req.headers.referer && req.headers.referer.indexOf("http://localhost:3000/fuel") !== -1) {
      res.setHeader('Content-Type', 'text/javascript');
      res.sendFile(path.join(__dirname, '..',  'backend', 'calculator.js'));
  } else {
      res.status(404).redirect("/error");
  }
});


// Define a route for the Fuel History page
router.get('/fuelhistory', (req, res) => {
  if (req.session.userId) {
    Fuel.find({username: req.session.userId}).then(function(fuelhistory,err){
      if(err){
        console.log('error')
      }
      else{
        res.render('fuelhistory', {fuelList: fuelhistory});
      }
    });
  }else {
    res.redirect('/error');
  }
});


// Define a route for the Logout page
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('logout');
});


// Define a route for the Error page
router.get('/error', (req, res) => {
  req.session.destroy();
  res.render('error');
});


module.exports = router