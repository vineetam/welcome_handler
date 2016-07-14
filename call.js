var https = require('https');
var makeRequest = require('./index');

exports.printMsg = function() {
  console.log("This is a message from the demo package");
  makeRequest();
}

