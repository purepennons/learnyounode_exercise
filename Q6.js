var ls = require('./listFile');

var argv = process.argv;
var dirPath = argv[2];
var filterString = argv[3];

ls(dirPath, filterString, function(err, data){
	if(err){
		return console.error('There was an error:', err);
	}

	data.forEach(function(file){
		console.log(file);
	});

});