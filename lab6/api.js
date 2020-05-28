const express = require("express");
var fs = require("fs");
let jsonbody = null;
const router = express.Router();
const Input = require("./input");
router.get("/", (req, res) => {
var page = fs.readFileSync("main.html");
res.writeHead(200, {"Content-Type": "text/html"});
res.write(page);
res.end();
})

router.get("/input", (req, res)=>{
console.log(jsonbody);
res.send(jsonbody);
});

router.post("/input", (req, res)=>{
console.log(req.body);
var type = req.body.type;
var width = req.body.width
var height = req.body.height;
var color = req.body.color;
var number = req.body.number
let error = null;
if (width == "") { width = 1;}
if (height == ""){ height = 1;}
if (color == "") { color = "white";}
if (number == ""){ number = Math.floor(Math.random() * 9);}

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
Input.findOne({color: color})
.then(input => 
{
if(input != null)
{
jsonbody = input;
res.redirect("./input");
}
else
{
error = {error : "Не найдено изображение животного с указанным параметром 'цвет'."};
res.send(finderror);
}
});
}
else
{
error = {error : "Не найдено изображение животного с указанными параметрами 'ширина' или 'высота'."};
res.send(finderror);
}
});
}
else
{
error = {error : "Не найдено изображение животного с указанными параметрами 'вид' или 'номер'."};
res.send(finderror);
}
});
});
module.exports = router;