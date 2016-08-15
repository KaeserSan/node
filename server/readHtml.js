var port = 8088;
var http = require('http');
var fs = require('fs');
var request = require('request');


var server = http.createServer();
// port = process.env.PORT;

var links =	fs.readFileSync('./links.txt', 'utf-8', function( err, content ){
		return content.toString();
	});

console.log( links );

request( links , function( error, response, body ){
	if (!error && response.statusCode == 200) {
    	console.log(body);
  }
})

server.on("request", function ( request, response){
	// response.send('this is the response');
	response.write( file );
	response.end();
});

server.on('listening', function(){
	console.log('Listening in port ' + port );
});


server.listen( port );