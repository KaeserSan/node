// Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout).  

var http = require('http');
var concatstream = require('concat-stream');

var urlRequest = process.argv[2];
var resultString="";

// var result = http.get( urlRequest, function ( urlData ){

// 	urlData.setEncoding('utf8');
// 	urlData.on('data', ( dat ) => { resultString += dat;})
// 	urlData.on('error', ( err ) => { console.log("Error...");})
// 	urlData.on('end', ( dat ) => {
// 		console.log(resultString.length);
// 		console.log(resultString);
// 	})

// } );


var result = http.get( urlRequest, function ( data ){
	data.setEncoding('utf8');
	data.pipe(concatstream( completeString ));
} );


function completeString( data ){
	console.log( data.length );
	console.log( data );
}