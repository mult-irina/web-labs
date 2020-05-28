const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inputSchema = new Schema({
    type: String,
    width: Number,
    height: Number,
    color: String,
    image: String,
    value: Number
});
const input = mongoose.model("input",inputSchema);
module.exports = input;