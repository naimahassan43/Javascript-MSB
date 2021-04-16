/********* Builtin Constructor *********/
// Create string using constructor functions

let name1 = 'John';
let name2 = new String('Smith');

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);
console.log(name1 === name2);

// Create Number using constructor functions

let age1 = 27;
let age2 = new Number(28);

console.log(age1);
console.log(age2);

// Declare Boolean using constructor functions
let isValid1 = true;
let isValid2 = new Boolean(true);

// Create Array using constructor functions
let colors = ['red', 'green', 'blue'];
let colors1 = new Array('red', 'green', 'blue');

console.log(colors1);

// Create Function using constructor functions

// function sum1(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum1(4, 5));

const sum2 = new Function('num1', 'num2', 'return num1 + num2');

console.log(sum2(40, 51));

// Create Object using constructor functions

// const obj1 = {
//     name: 'john',
//     age: 45
// }
// console.log(obj1);

const obj2 = new Object({
    name: 'john',
    age: 45
});
console.log(obj2);

// node OOJ/index1.js