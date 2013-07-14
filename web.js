var express = require('express');
var fs = require('fs');

var buf;

fs.readFile('index.html', 'utf8', function (err, data) {
	"use strict";
	if (err) {
		return console.log(err);
	}
	buf = data;
});

var app = express.createServer(express.logger());

app.get('/', function (request, response) {
	"use strict";
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	"use strict";
    console.log("Listening on " + port);
});
