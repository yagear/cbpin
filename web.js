var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


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

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
