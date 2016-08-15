var fs = require('fs');

var fileName = process.argv[2];
var resultingLines = 0;

var myFile = fs.readFileSync( fileName );
var lines = myFile.toString().split('\n');
console.log( lines.length -1 );