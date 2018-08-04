var express = require('express');

var app = express.createServer();

app.get('/a', function(req, res) {
	res.send({ user: 'tobi' });
	res.send([1,2,3]);
});

var port = process.env.PORT || 3000;
app.listen(port);
