var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var extFilter = '.'+process.argv[3];
var files = fs.readdir( filePath , (err, data) => {
	data.forEach(function ( file ){
	if (path.extname( file ) === extFilter ){console.log( file );}	
	})
});
