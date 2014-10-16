var http = require('http');
var fs = require('fs');

var argv = process.argv;

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain' });
	var readStream = fs.createReadStream(argv[3], {});
	readStream.pipe(res);
}).listen(argv[2]);