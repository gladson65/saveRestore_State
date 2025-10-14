import express from 'express';
import appRoute from './routes/app.routes.js';


// Your app state is the set of variables that describe what’s currently happening in your app

// create a server
const app = new express();
app.listen('7000', ()=> {
    console.log("Server is running on the port 7000")
})



appRoute(app);