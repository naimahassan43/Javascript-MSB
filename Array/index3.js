/******** Joining Array ********/
//Array convert into string : [1,2,3] convert 123/1,2,3/1-2-3

let number = [1, 2, 3];
let joinArray = number.join('-');
console.log(joinArray);

let message = 'We are learning Array join method';

let arrayOfMessage = message.split(' ');
console.log(arrayOfMessage.join('-'));
// node Array/index3.js