var myObj = require('./ej6_mod.js');

var filePath = process.argv[2];
var extFilter = process.argv[3];

myObj( filePath, extFilter, function( err, data){
	if (err) { throw err;}
	data.forEach(( value ) => {console.log(value);})
});

