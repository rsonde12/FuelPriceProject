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

// Middleware function to check if user is logged in
// function isLoggedIn(req, res, next) {
//   if (req.session.userId) {
//     // If user is logged in, proceed to next middleware function
//     next();
//   } else {
//     // If user is not logged in, redirect to login page
//     res.redirect('/');
//   }
// }

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

router.get('/ClientRegistration', (req, res) => {
  res.render('registration.ejs');
  // res.sendFile(path.join(__dirname, '..', 'public', 'ClientRegistration.html'));
});

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
      // console.log(req.session.userId);
      // Registration.create(clientReg).then((a, b) => a.save());
      const registeredClient = await Registration.create(clientReg);
      await registeredClient.save();
      res.redirect("/clientProfile");
    }
  });
});


router.get('/clientProfile', (req, res) => {
  res.render('profile.ejs');
  // res.sendFile(path.join(__dirname, '..', 'public', 'clientProfile.html'));
});

router.post('/clientProfile', async function(req,res){
  // Check if the user is logged in by checking if the user ID is saved in the session
  if (req.session.userId) {
    let clientProfile = {
        userid: req.session.userId,
        name: req.body.name,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    };
    console.log(clientProfile);
    const { address } = clientProfile;
    req.session.address = address;
    // Profile.create(clientProfile).then((a, b) => a.save());
    const profile = await Profile.create(clientProfile);
    await profile.save();
    res.redirect("/fuel");
  }
  else {
    // If the user is not logged in, redirect to the login page
    console.log(req.session.userId);
    res.redirect('/');
  }
});

router.get('/mangeProfile', (req, res) => {
  Profile.find().then(function(mangeProfile,err){
    if(err){
        console.log('error')
    }
    else{
        res.render('mangeProfile', {clientProfileList: mangeProfile});
    }
  });
});

router.get('/fuel', (req, res) => {
  if (req.session.userId) {
    res.render('fuel', {userAddress: req.session.address})
    // Profile.find({userid: req.session.userId}).then(function(record,err){
    //   if(err){
    //       console.log('error')
    //   }
    //   else{
    //       // console.log(record);
    //       // const { address, city, state, zipcode } = record[0];
    //       // res.render('fuel', {userAddress: `${address}, ${city}, ${state} ${zipcode}`});
    //       res.render('fuel', {userAddress: req.session.userId});
    //   }
    // });
  }else {
    // If the user is not logged in, redirect to the login page
    res.redirect('/');
  }
});

router.post("/fuel", async function(req,res){
  if (req.session.userId) {
    let fuel = {
        userid: req.session.userId,
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
    // If the user is not logged in, redirect to the login page
    res.redirect('/');
  }
});

router.get('/fuelhistory', (req, res) => {
  if (req.session.userId) {
    Fuel.find({userid: req.session.userId}).then(function(fuelhistory,err){
    if(err){
      console.log('error')
    }
    else{
      res.render('fuelhistory', {fuelList: fuelhistory});
    }
  });
  // res.render('fuelhistory', {fuelList: fuelhistory})
  }
});

router.get('/logout', (req, res) => {
  // Destroy the session and redirect to the login page
  req.session.destroy();
  res.redirect('/');
});


module.exports = router