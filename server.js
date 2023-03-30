// File Description: This is the main file for our server stuff and backend. The route handling (GET, POST, DELETE) and all other updates are in the route folder.
const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routers');

// Set up middleware to serve static and ejs files
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//Set up and connect to the database
mongoose.connect("mongodb://0.0.0.0:27017/testing", {useNewUrlParser: true}, {useUnifiedTopology: true})
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log('failed');
})

//defining the routes
app.use('/', routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
