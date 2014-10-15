var fs = require('fs');

var argv = process.argv;
var filePath = argv[2];

fs.readFile(filePath, function (err, data) {
  if (err) throw err;
  array = data.toString().split('\n');
  console.log(array.length-1);
});