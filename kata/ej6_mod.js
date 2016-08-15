var fs = require('fs');
var path = require('path');

/*
	You must write a module file to do most of the work. The module must  
	export a single function that takes three arguments: the directory name,  
	the filename extension string and a callback function, in that order. The  
	filename extension argument must be the same as what was passed to your  
	program. Don't turn it into a RegExp or prefix with "." or do anything  
	except pass it to your module where you can do what you need to make your  
	filter work. 

	The callback function must be called using the idiomatic node(err, data)  
	convention. This convention stipulates that unless there's an error, the  
	first argument passed to the callback will be null, and the second will be  
	your data. In this exercise, the data will be your filtered list of files,  
	as an Array. If you receive an error, e.g. from your call to  
	fs.readdir(), the callback must be called with the error, and only the  
	error, as the first argument.  
*/

function myList ( dirName, ext, callback ){
	fs.readdir( dirName, function(err, data){
		if (err) {return callback(err);}
		var filteredData = data.filter( function(data, i){
			return path.extname( data ) === '.'+ext;
		}) 
	callback( err, filteredData )
	})

}


module.exports = myList;