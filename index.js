const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

app.get('/', function(req, res){
    res.json("started");
});

app.listen(port, () => {
    console.log('App listening on port 3000!');
});
