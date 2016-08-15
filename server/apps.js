var port = 3000;
var http = require('http');
var server = http.createServer();

port = process.env.PORT;

server.on("request", function ( request, response){
	response.send('this is the response');
});

server.on('listening', function(){
	console.log('Listening in port ' + port );
});


server.listen( port );