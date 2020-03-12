var mongoose = require("mongoose");


// MONGOOSE/MODEL CONFIG
var blogScheme = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Blogs", blogScheme);