import express from 'express';
import mongoose from 'mongoose';
import appRoute from './routes/app.routes.js';


// Your app state is the set of variables that describe what’s currently happening in your app

// create a server
const app = new express();
app.listen('7000', ()=> {
    console.log("Server is running on the port 7000")
})

// mongoose database connection
mongoose.connect("mongodb://localhost:27017/appState");
const db = mongoose.connection;
db.on('open', ()=> {
    console.log("MongoDB datbase connection is successful");
})
db.on('error', ()=> {
    console.log("MongoDB database connection is not successful")
})


appRoute(app);