var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname ));
app.get('/', function(request, response) {

    response.sendFile(__dirname + '/index.html');

}).listen(port, function() {
    console.log("Listening on " + port);
});