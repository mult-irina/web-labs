const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exp = express();
mongoose.connect("mongodb://localhost/inputdb", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => { console.log("Connected to database.")});
exp.use('/pic', express.static('pic'));
exp.use(bodyParser.json());
exp.use("/api",require("./api"));
app.listen(8888, ()=>{ console.log("Server has started.");});

