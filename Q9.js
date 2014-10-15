var http = require('http');
var EventEmitter = require('events').EventEmitter;

var async = require('async');

var argv = process.argv;

var readyEvent = new EventEmitter();

var results = [];
var count = 0;

readyEvent.on('readyToPrint', function(){
	if(count === 3){
		for(var i=0;i<results.length;i++){
			console.log(results[i]);
		}
	}
});

var httpGet = function(index){
	http.get(argv[index + 2], function(res){
		var recData = '';
		res.setEncoding('utf8');
		
		res.on('data', function(chunk){
			recData += chunk.toString();
		});

		res.on('end', function(){
			results[index] = recData.toString();
			count++;
			readyEvent.emit('readyToPrint');
		});

	}).on('error', function(err){
		console.error("Got error: " + err.message);
	});	
};

for(var i=0;i<3;i++){
	httpGet(i);
}
