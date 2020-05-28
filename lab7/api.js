const express = require("express");
var fs = require("fs");
let jsonbody = null;
const router = express.Router();
const Input = require("./input");

router.get("/input", (req, res)=>{
console.log(jsonbody);
res.send(jsonbody);
});

router.post("/find", (req, res)=>{
console.log(req.body);
var type = req.body.type;
var number = req.body.number
let error = null;
if (number == ""){ number = Math.floor(Math.random() * 9);}

Input.findOne({type: type, number: number})
.then(input => 
{
if (input != null)
{
res.send({type: input.type, width: input.width, height: input.height, number: input.number});
}
else
{
error = {error : "image not found"};
res.send(error);
}
});
});

router.post("/find", (req, res)=>{
console.log(req.body);
var type = req.body.type;
var width = req.body.width
var height = req.body.height;
var number = req.body.number
let error = null;
if (width == "") { width = 1;}
if (height == ""){ height = 1;}

Input.findOne({type: type, number: number})
.then(input => 
{
if (input != null)
{
Input.findOne({width: width, height: height})
.then(input => 
{
if(input != null)
{
jsonbody = input;
res.redirect("./input");
}
else
{
finderror = {error : "Не найдено изображение животного с указанными параметрами 'ширина' или 'высота'."};
res.send(finderror);
}
});
}
else
{
finderror = {error : "Не найдено изображение животного с указанными параметрами 'вид' или 'номер'."};
res.send(finderror);
}
});
});
module.exports = router;