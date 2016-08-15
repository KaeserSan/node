var port = 8088;
var http = require('http');
var server = http.createServer();
var fs = require('fs');

// port = process.env.PORT;

var file = fs.readFileSync('./lorem.txt', 'utf-8', function( err, content ){
		return content.toString();
	});

console.log( file );

server.on("request", function ( request, response){
	// response.send('this is the response');
	response.write( file );
	response.end();
});

server.on('listening', function(){
	console.log('Listening in port ' + port );
});


server.listen( port );