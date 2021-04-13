/*********PadStart, PadEnd***********/

let minute = '4';
let hour = '7';


console.log(minute.padStart(5, '01'));
console.log(hour.padEnd(3, '0'));

/*********trimStart, trimEnd***********/

let name = '   john   ';
console.log(name.length);

// name = name.trim();
name = name.trimStart();
name = name.trimEnd();
console.log(name.length);
// node ES6-ES7-ES8/index3.js