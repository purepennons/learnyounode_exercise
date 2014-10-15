var http = require('http');

var argv = process.argv;
var url = argv[2];

http.get(url, function(res){
	// console.log('STATUS: ' + res.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		console.log(chunk);
	});
}).on('error', function(err){
	console.error("Got error: " + err.message);
});