var http = require('http');
var bl = require('bl');
var cs = require('concat-stream');

var argv = process.argv;
var url = argv[2];

http.get(url, function(res){
	// console.log('STATUS: ' + res.statusCode);
	// console.log('HEADERS: ' + JSON.stringify(res.headers));
	var recData = '';
	res.setEncoding('utf8');
	
	res.on('data', function(chunk){
		recData += chunk.toString();
	});

	res.on('end', function(){
		console.log(recData.length);
		console.log(recData);
	});

}).on('error', function(err){
	console.error("Got error: " + err.message);
});