function first() {
console.log("Request handler 'first' was called.");
return 'first.html';
}
function second() {
console.log("Request handler 'second' was called.");
return 'second.html';
}
function third() {
console.log("Request handler 'third' was called.");
return 'third.html';
}
exports.first = first;
exports.second = second;
exports.third = third;
