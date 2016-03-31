var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
// start a new server and use the express app as the boilerplate.
var http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Server started on Port ' + PORT);
});
