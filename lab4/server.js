var fs = require("fs");
var http = require("http");
var url = require('url');
function start(route,handle) {
function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;
if (!pathname.includes('favicon'))
{console.log("Request for " + pathname + " received");
var pagename = route(handle,pathname);
var page = fs.readFileSync(String(pagename),encoding='utf8');
console.log("Open " + pagename);
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write(page);
response.end();
}
}
var server = http.createServer(onRequest);
server.listen(8888);
console.log("Server has started");
}
exports.start = start;
