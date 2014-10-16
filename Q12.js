var http = require('http');
// var map = require('through2-map')

var argv = process.argv;

var server = http.createServer(function(req, res){
	
	var body = "";
	req.on('data', function(chunk){
		body += chunk;
		res.write(chunk.toString().toUpperCase());
	});

	req.on('end', function(){
		res.end();
	});


}).listen(argv[2]);