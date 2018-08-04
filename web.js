var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
	res.set('Content-Type', 'text/html');
	res.send('<html><head></head><body>test</body></html>');
});
app.get('/a', function(req, res) {
	res.send({ user: 'tobi' });
	res.send([1,2,3]);
});

var port = process.env.PORT || 3000;
app.listen(port);
