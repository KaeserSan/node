

var numbers = process.argv;
var result = 0;
for (var i =2 ; i < numbers.length; i++) {
	result += parseInt(numbers[i],10);
}
console.log( result );