const express = require('express');

const app = express();

//ROUTES
app.get('/',(req,res) => {
    res.send("Hello world!")
});


//hown to listen to server
app.listen(3000);