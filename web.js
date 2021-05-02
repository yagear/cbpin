var ejs = require('ejs'); 
var fs = require('fs'); 
var express = require('express');
var app = express();
var url  = require('url');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var pageBase = fs.readFileSync(app.get('views') + '/base.ejs', 'utf8');

app.get('/', function(req, res){
	var html = ejs.render(pageBase, {
		title:"<!-- title -->タイトル",
		head: "<!-- head -->",
		header: "<!-- header -->ヘッダ",
		contents:"<!-- contents -->コンテンツ",
		footer: "<!-- footer -->フッタ",
	});
	res.set('Content-Type', 'text/html');
	res.send(html);
	res.end();
});



var pg = require('pg');
app.get('/db', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		client.query('SELECT * FROM test_table', function(err, result) {
			done();
			if (err)
			{ console.error(err); response.send("Error " + err); }
			else
			{ response.render('pages/db', {results: result.rows} ); }
		});
	});
});

/// TEST
app.get('/test', function(req, res){
	res.set('Content-Type', 'text/html');
	res.send('<html><head></head><body>test</body></html>');
});

/***
 REST
 */
app.get('/:entity/:command', function(req, res) {
	res.send('entity:' + req.params.entity
    + '<br>' + 'command:' + req.params.command);
});
app.get('/:entity', function(req, res) {
	res.send('entity:' + req.params.entity);
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
