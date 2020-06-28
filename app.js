const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


//Middlewares
app.use('/', (req,res)=>{
    res.send("Done and dusted");
});
//ROUTES
app.get('/',(req,res) => {
    res.send("Hello world!")
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log("connected to DB")
);

//How to listen to server (http://localhost:3000/)
app.listen(5000);