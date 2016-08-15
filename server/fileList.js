var port = 8088;
var http = require('http');
var fs = require('fs');
var request = require('request');


var server = http.createServer();
// port = process.env.PORT;

// fs.readdir(__dirname, function (err, files) {
myFiles = fs.readdirSync( __dirname )
myFiles.forEach(function( data, i ){
    fs.lstat(data, function( err, oStats){
        console.log((oStats.isFile()?'FILE: ':'FOLDER: ') + data);
    })
})


// for ( var i = 0; i< myFiles.length; i++ ) {
//     var fileName = "";
//     console.log( myFiles[i]);
//     fs.lstat(__dirname + '/' + myFiles[i], function( err, stats){
//         fileName = myFiles[i];
//         console.log(fileName);
//         if (stats.isFile()) {
//             console.log('FILE ' + fileName);
//         } 
//         else {
//             console.log('FOLDER ' + fileName);
//         }
//     })
// }

// server.on("request", function ( request, response){
// 	// response.send('this is the response');
// 	response.write( file );
// 	response.end();
// });

// server.on('listening', function(){
// 	console.log('Listening in port ' + port );
// });


// server.listen( port );