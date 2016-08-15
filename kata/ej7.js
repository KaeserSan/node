// Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout).  

var http = require('http');

var urlRequest = process.argv[2];

var result = http.get( urlRequest, function ( urlData ){

	urlData.setEncoding('utf8');
	urlData.on('data', ( dat ) => { console.log( dat/*.toString()*/ );})
	urlData.on('error', ( err ) => { console.log("Error...");})

} );



result.on('data', function( data ){
	console.log( data );
});

