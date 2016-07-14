var https = require('https');

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var makeRequest = function() {

    //var message = "Here's looking at you, kid.";
    var options = {
        host: 'localhost', port: 8000, path:'/', method: 'GET'
    }

    var request = https.request(options, function(response) {
       
            console.log('STATUS: ' + response.statusCode);
            
            
            
        
    });
   
   request.on('response', function (response) {
  var body = '';
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function () {
    console.log('BODY: ' + body);
  });
});
request.end();
};

module.exports = makeRequest;


