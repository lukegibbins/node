module.exports = function() {
    var http = require('http');
    var server = http.createServer(function(request, response) {
        console.log("Got a response!");
        response.write("Hi, you've got my http request!");
        response.end();
    });

    server.listen(3000);
    console.log("Awaiting request...")    
}


