var fs = require('fs');

var fileName = process.argv[2];
var resultingLines = 0;

var myFile = fs.readFile( fileName, 'utf8', (err, data) => console.log( myFile.split('\n').length -1 ));
;