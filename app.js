const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');



// ROUTES
app.get('/',(req,res) => {
    res.send("Hello world!")
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log("Connected to mongoDB")
);

// How to listen to server (http://localhost:5000/)
const port = 5000;
app.listen(port, ()=> console.log(`Server connected to port ${port}`));