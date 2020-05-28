var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}
handle["/"] = requestHandlers.start;
handle["/crane"] = requestHandlers.crane;
handle["/toad"] = requestHandlers.toad;
handle["/giraffe"] = requestHandlers.giraffe;
server.start(router.route,handle);
