var fs = require('fs');

module.exports = function(dirName, extension, cb){
	var tempArray = [];
	fs.readdir(dirName, function(err, data){
		if (err)
			return cb(err);
		for(var i=0;i<data.length;i++){
			var splitArray = data[i].toString().split('.');
			if(splitArray.length > 1){
				if(splitArray[splitArray.length-1] == extension){
					tempArray.push(data[i]);
				}
			}
		}
		cb(null, tempArray);
	});
};