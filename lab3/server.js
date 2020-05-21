var fs = require("fs");
var http = require("http");
var url = require('url');
var res;
function start() {
function onRequest(request, response) {
var params = url.parse(request.url).search;
if (params != null) 
{
params = params.split('?')[1];
params = params.split('%20');
console.log(params);
if (isNaN(params[0]) || isNaN(params[1]))
{res = "Error!";}
else
{res = params[0] * params[1];}
console.log(res);
}
var page = fs.readFileSync('HelloWorld.html');
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write(page);
if (params != null)
{response.write(String(res),encoding='utf8');}
response.end();
}
var server = http.createServer(onRequest);
server.listen(8888);
console.log("Server has started");
}
exports.start = start;
