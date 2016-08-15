var port = 8088;
var http = require('http');
var fs = require('fs');
var request = require('request');
var concat = require('concat-stream');

var server = http.createServer();
// port = process.env.PORT;

var destFile = process.argv[2];
var contentString = process.argv[3];

fs.writeFile(__dirname+'/'+destFile, contentString, (err) => {
  		if (err) throw err;
  		console.log('It\'s saved!');
	});

fs.readFile(__dirname+'/'+destFile, (err, data) => console.log(data.toString()))
// server.on("request", function ( request, response){
// 	response.end("It's working!!");	
// });


// server.on('listening', function(){
// 	console.log('Listening in port ' + port );
// });


// server.listen( port );