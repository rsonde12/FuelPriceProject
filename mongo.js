// File Description: This is the main file for our server stuff and backend. The route handling (GET, POST, DELETE) and all other updates are in the route folder.
const mongoose = require('mongoose');

// Make the express app listen to server:
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // After connected to DB, then listen to express application:
        app.listen(process.env.PORT, () => {
            console.log("Conneted to the database and listening on port 3000!");
        });
    })
    .catch((error) => {
        // Log any errors to console:
        console.log(error);
    });
