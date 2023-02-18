// const express = require("express");
// const path = require('path')

// let index = new express();
// const publicPath = path.join(__dirname,'public')

// //GET, POST, ...
// index.get("/",function(req, res) {
//     res.send("Hello from Node Sample");
// });

// index.get("/about",function(req, res){
//     res.send("About web page");
// });

// index.get("/contact",function(req,res){
//     res.send("@rsond");
// });

// index.use(express.static(publicPath))

// index.get("*",function(req,res){
//     res.send("");
// });


// let port = 12345;
// index.listen(port,function(){
//     console.log("Server started listening at localhost:"+port);
// });
// server.js
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

// Start the server
app.listen(3000, () => {
  console.log('Server started on port localhost:3000');
});
