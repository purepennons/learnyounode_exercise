var net = require('net');
var strftime = require('strftime');

var argv = process.argv;

var server = net.createServer(function(socket){
	var currentDate = new Date();
	// var displayFormat = currentDate.getFullYear() +  '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes();
	socket.write(strftime('%Y-%m-%d %H:%M' ,currentDate) + '\n');
	socket.end();
}).listen(argv[2]);
