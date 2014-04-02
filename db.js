// require mongoose
var mongoose = require('mongoose');

// add connection string
mongoose.connect('mongodb://flights:test@ds035907.mongolab.com:35907/flights');

module.exports = mongoose.connection;