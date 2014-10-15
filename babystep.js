var sum = 0;
process.argv.forEach(function(val, index, array) {
	if(index > 1){
		sum+= parseInt(val, 10);
	}
	if(index == process.argv.length - 1)
		console.log(sum);
});

