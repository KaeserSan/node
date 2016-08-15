// Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout).  

/*jshint esversion:6 */

var http = require('http');

var urlRequest1 = process.argv[2];
var urlRequest2 = process.argv[3];
var urlRequest3 = process.argv[4];

var urlDone1 = false;
var urlDone2 = false;
var urlDone3 = false;

var resultString1="";
var resultString2="";
var resultString3="";

// var result1 = 	http.get( urlRequest1, function ( urlData1 ){
// 	urlData1.setEncoding('utf8');
// 	urlData1.on('error', ( err1 ) => { console.log("Error..."); });
// 	urlData1.on('data', ( dat1 ) => { resultString1 += dat1; });
// 	urlData1.on('end', ( dat1 ) => { urlDone1 = true; console.log(resultString1)});
// } );


// var result2 = 	http.get( urlRequest2, function ( urlData2 ){
// 	urlData2.setEncoding('utf8');
// 	urlData2.on('error', ( err2 ) => { console.log("Error..."); });
// 	urlData2.on('data', ( dat2 ) => { resultString2 += dat2; });
// 	urlData2.on('end', ( dat2 ) => { urlDone2 = true; });
// } );


// var result3 = 	http.get( urlRequest3, function ( urlData3 ){
// 	urlData3.setEncoding('utf8');
// 	urlData3.on('error', ( err3 ) => { console.log("Error..."); });
// 	urlData3.on('data', ( dat3 ) => { resultString3 += dat3; });
// 	urlData3.on('end', ( dat3 ) => { urlDone3 = true; });
// } );


var myPro = new Promise(function( resolve, reject){
	var result1 = http.get( urlRequest1, function ( urlData1 ){
		urlData1.setEncoding('utf8');
		urlData1.on('error', ( err ) => { console.log("Error..."); });
		urlData1.on('data', ( dat ) => { resultString1 += dat; });
		urlData1.on('end', () => {
			console.log(resultString1);
			var result2 = http.get( urlRequest2, function ( urlData2 ){
				urlData2.setEncoding('utf8');
				urlData2.on('error', ( err ) => { console.log("Error..."); });
				urlData2.on('data', ( dat2 ) => { resultString2 += dat2; });
				urlData2.on('end', () => {
					console.log(resultString2);
					var result3 = http.get( urlRequest3, function ( urlData3 ){
						urlData3.setEncoding('utf8');
						urlData3.on('error', ( err ) => { console.log("Error..."); });
						urlData3.on('data', ( dat3 ) => { resultString3 += dat3; });
						urlData3.on('end', () => {
							resolve(resultString3);
						});
					});
				});
			});
		});
	

	});
})
.then(function( val ){
	console.log(val);
	}
);

// var http = require('http');

// promises = [
//     promiseLoad(process.argv[2]),
//     promiseLoad(process.argv[3]),
//     promiseLoad(process.argv[4])
// ];

// Promise.all(promises).then(function(res){
//     res.forEach( function( value ) {console.log(value)} );
// });

// function promiseLoad(url) {
//   var body = '';
//   return new Promise(function(resolve, reject) {
//     http.get(url, function(res) {
//       res.on('data', function(d) {
//         body += d;
//       });
//       res.on('end', function() {
//         resolve(body);
//       });
//     });
//   });
// }









