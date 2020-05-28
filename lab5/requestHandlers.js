var fs = require("fs");
var query = require('querystring');

function start(response, postData) {
console.log("Request handler 'start' was called.");
var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form onsubmit="return check()" method="post">'+
'<textarea name="text" rows="10" cols="40"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'<script>'+
'check();'+
'</script>'+
'</html>';
response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.end();
}

function crane(response, postData) {
console.log("Request handler 'crane' was called.");
upload(response, postData);
}

function toad(response, postData) {
console.log("Request handler 'toad' was called.");
upload(response, postData);
}

function giraffe(response, postData) {
console.log("Request handler 'giraffe' was called.");
upload(response, postData);
}

function check() {
var inputwords = ['crane','toad','giraffe'];
var input = document.getElementById("input");
var inputword = input.value;
var array = inputword.split(' ');
for (var i = 0; i < inputwords.length; i++) {
if (inputword == inputwords[i]) {return true;}
else {
for (var j = 0; j < 10; j++) {
if (inputword == inputwords[i] + ' ' + j) {return true;}
}
}
}
alert ("Неверный ввод данных");
return false;
}

function upload(response, postData) {
console.log("Request handler 'upload' was called.");
var data = query.parse(postData).text;
var array = data.split(' ');
var img;
response.writeHead(200, {"Content-Type": "image/jpeg"});
if (array.length == 2 )
{
img = fs.readFileSync('pic/' + array[0] + array[1] + '.jpg');
}
else 
{
var num = Math.floor(Math.random() * 10);
img = fs.readFileSync('pic/' + data + num + '.jpg');
}
response.write(img);
response.end();
}
exports.start = start;
exports.crane = crane;
exports.toad = toad;
exports.giraffe = giraffe;