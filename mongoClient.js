// // File Description: This is the main file for our server stuff and backend. The route handling (GET, POST, DELETE) and all other updates are in the route folder.
// // const mongoose = require('mongoose');

// // // Make the express app listen to server:
// // mongoose.connect(process.env.MONGO_URI)
// //     .then(() => {
// //         // After connected to DB, then listen to express application:
// //         app.listen(processs.env.PORT, () => {
// //             console.log("Conneted to the database and listening on port 3000!");
// //         });
// //     })
// //     .catch((error) => {
// //         // Log any errors to console:
// //         console.log(error);
// //     });

// const moongoose = require("mongoose")
// moongoose.connect("mongodb://0.0.0.0:27017/testing")
// .then(() =>{
//     console.log("mongodb connected");
// })
// .catch(() =>{
//     console.log('failed');
// })



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/testing";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myData = {'name':'b', 'price':10, 'inStock':false};
//   dbo.collection("smartphones").insertOne(myData, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


// module.exports = moongoose.model("fuel", newSchema)

const MongoClient = require('mongodb').MongoClient;

//import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("testing");

    // database.createCollection("profile", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    //   });

    const name =  "Leah Joseph";
    // const address = document.getElementById("address").value;
    // const address2 = document.getElementById("address2").value;
    // const city = document.getElementById("city").value;
    // const state = document.getElementById("state").value;
    // const zipcode = document.getElementById("zipcode").value;

    var myobj = { name: name, address: "10 Quad wealer ln", address2: "", city: "Houston", state: "TX", zipcode: "77204", username: "LeahJoseph"};

    const profiles = database.collection("profile");
    // Estimate the total number of documents in the collection
    // and print out the count.
    //const estimate = await profiles.estimatedDocumentCount();
    //console.log(`Estimated number of documents in the movies collection: ${estimate}`);
    // Query for movies from Canada.
    const query = { username: "LeahJoseph" };

    // const countTX = await profiles.countDocuments(query);
    // console.log(`Number of profiles from TX: ${countTX}`);

    //if (countTX > 0) {
        database.collection("profile").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    //}
    


    

    

    // const profileSchema= MongoClient.Schema ({
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     address:{
    //         type:String,
    //         required:true
    //     },
    //     address2:{
    //         type:String,
    //     },
    //     city:{
    //         type:String,
    //         required:true
    //     },
    //     state:{
    //         type:String,
    //         required:true
    //     },
    //     zipcode:{
    //         type:Number,
    //     }
    // })

  } finally {
    await client.close();
  }
}
run().catch(console.dir);