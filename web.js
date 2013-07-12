var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = fs.readFile('index.html');

app.get('/', function (request, response) {
	"use strict";
    response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	"use strict";
    console.log("Listening on " + port);
});
