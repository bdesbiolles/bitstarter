var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function (request, response) {
	"use strict";
    response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	"use strict";
    console.log("Listening on " + port);
});
