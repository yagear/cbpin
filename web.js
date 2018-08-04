var express = require('express');

var app = express.createServer();

app.get('/a', function(req, res) {
	res.end();
});

var port = process.env.PORT || 3000;
app.listen(port);
