const express = require('express');
const app = express();
const path = require('path');

// Set up middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'client.html'));
});

// Define a route for the fuel page
app.get('/fuel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fuel.html'));
});

// Define a route for the fuel quote history page
app.get('/fuelhistory', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fuelhistory.html'));
});

// Define a route for the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Define a route for the Registration page
app.get('/ClientRegistration', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port localhost:3000');
});
