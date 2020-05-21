var pagename;
function route(handle,pathname) {
if (!pathname.includes('favicon')){
console.log("About to route a request for " + pathname);
if (typeof handle[pathname] === 'function') {
pagename = handle[pathname]();
return pagename;
} else {
console.log("No request handler found for " + pathname);
}
}
}
exports.route = route
