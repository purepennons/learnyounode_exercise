var http = require('http');
var url = require('url');

var argv = process.argv;

var server = http.createServer(function(req, res){
	// console.log(url.parse(req.url, true));
	// res.end();
	reqUrl = url.parse(req.url, true);
	reqQuery = reqUrl.query;

	var resJson = {};

	var d = new Date(reqQuery.iso);

	res.writeHead(200, { 'Content-Type': 'application/json' });

	switch(reqUrl.pathname) {
		case '/api/parsetime':
			resJson.hour = d.getHours();
			resJson.minute = d.getMinutes();
			resJson.second = d.getSeconds();
			break;

		case '/api/unixtime':
			resJson.unixtime = d.getTime();
			break;
	}

	res.write(JSON.stringify(resJson));
	res.end();

}).listen(argv[2]);