var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
	res.set('Content-Type', 'text/html');
	res.send('<html><head></head><body>test</body></html>');
});
app.get('/:entity', function(req, res) {
	res.send('entity:' + req.params.entity);
});
app.get('/:entity/:command', function(req, res) {
	res.send('entity:' + req.params.entity + '<br>');
	res.send('command:' + req.params.command);
});

var port = process.env.PORT || 3000;
app.listen(port);
