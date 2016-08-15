'should require data.js and show in console the names and curent age of every beatle.'
'Stage2: use package dateformat to show also the birthdate w/ the format Sat, Jun 9 2007'
'include it as dependency in the package json'



var objeto = require("./data.js");
// console.log( objeto );
// console.log( objeto.name );
console.log( objeto.age() );
console.log('\n');
console.log( objeto.birth() );



var dateformat = require("dateformat");





// // Basic usage 
//     dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
//     // Saturday, June 9th, 2007, 5:46:21 PM 
 
//     // You can use one of several named masks 
//     dateFormat(now, "isoDateTime");
//     // 2007-06-09T17:46:21 
 
//     // ...Or add your own 
//     dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
//     dateFormat(now, "hammerTime");
//     // 17:46! Can't touch this! 
 
//     // When using the standalone dateFormat function, 
//     // you can also provide the date as a string 
//     dateFormat("Jun 9 2007", "fullDate");
//     // Saturday, June 9, 2007 
 
//     // Note that if you don't include the mask argument, 
//     // dateFormat.masks.default is used 
//     dateFormat(now);
//     // Sat Jun 09 2007 17:46:21 
 
//     // And if you don't include the date argument, 
//     // the current date and time is used 
//     dateFormat();
//     // Sat Jun 09 2007 17:46:22 