var fs = require('fs');

var argv = process.argv;
var filePath = argv[2];
var array = fs.readFileSync(filePath).toString().split("\n");  //同步讀檔
console.log(array.length-1);
