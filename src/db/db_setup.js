const mongoose = require('mongoose');
require("dotenv").config();

const MONGO_URI = "mongodb+srv://kamalai:o3KJeuK9w2FWIyWX@cluster0.mu2f9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const MONGO_URI = process.env;

const db = () => {
    mongoose.connect(MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
       useCreateIndex: true, 
    }) 
    .then(() => {
        console.log("*******************************")
        console.log("******************************")
        console.log("Mongodb connected succesfully")
        console.log("******************************")
        console.log("******************************")
    
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1)
    });
};
module.exports = db;