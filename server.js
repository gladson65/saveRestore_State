import express from 'express';

// create a server
const app = new express();
app.listen('7000', ()=> {
    console.log("Server is running on the port 7000")
})
