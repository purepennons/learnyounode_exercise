var fs = require('fs');

var argv = process.argv;
var dirPath = argv[2];
var filterString = argv[3];

fs.readdir(dirPath, function(err, files){
	for(var i=0;i<files.length;i++){
		var splitArray = files[i].toString().split('.');
		if(splitArray.length > 1){
			if(splitArray[splitArray.length-1] == filterString){
				console.log(files[i]);
			}
		}
	}
});