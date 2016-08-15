'should return an object w/ names, birthdates, and a method to get the current age of beatles.'

var dateformat = require("dateformat")



var beatles = {
	names: [
		'John Lenon',
		'Paul McCartney',
		'George Harrison',
		'Ringo Starr'
	],
	age: [
		new Date('1940-10-09'), 
		new Date('1942-06-18'),
		new Date('1943-02-25'),
		new Date('1940-07-07')
		]
	}

var now = new Date();
var years = 0;
var age = function(){
	for ( var i = 0; i < beatles.names.length; i++ ) {
		years = parseInt((now - beatles.age[i])/1000/60/60/24/365.25);
		console.log(beatles.names[i] + ' has ' + years + ' years old.');
	}
}

// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
var birth = function(){
	for ( var i = 0; i < beatles.names.length; i++ ) {
		console.log(beatles.names[i] + ' born: ' + dateformat(beatles.age[i], "ddd mmmm dd yyyy"));
	}
}



exports.name = beatles.names;
exports.age =  age;
exports.birth = birth;
