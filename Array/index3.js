/******** Joining Array ********/
//Array convert into string : [1,2,3] convert 123/1,2,3/1-2-3

let number = [1, 2, 3];
let joinArray = number.join('-');
console.log(joinArray);

let message = 'We are learning Array join method';

let arrayOfMessage = message.split(' ');
console.log(arrayOfMessage.join('-'));

/************ ES6 feature: Map************/

let numbers = [1, 2, 3];

// let mulByTwo = [];

// for (let num of numbers) {
//   mulByTwo.push(num *2);
// }
// console.log(mulByTwo);

// const mulByThree = numbers.map(function (num) {
//   return num * 3;
// });
const mulByThree = numbers.map((num)=> num * 3);
console.log(mulByThree);

console.log(numbers.map((num)=> num * 4));


let doctor = [
  {name: 'John', age:48},
  {name: 'Mary', age:54},
  {name: 'Smith', age:23}
];
const docName = doctor.map((doc) => doc.name);
console.log(docName);

/********* ES6 feature: Filtering an Array*******/
let numbers1 = [1, 2, 3, 4, 5, 6]; 
// 

// const onlyOddNumbers = numbers1.filter(function (num) {
//   return num % 2 === 1;
// });

const onlyOddNumbers = numbers1.filter( (num)=> num % 2 === 1);
console.log(onlyOddNumbers);

/************ ES6 feature: Reduce ************/
let numbers2 = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// for (let num of numbers2) {
//   sum += num;
// }
// console.log(sum);
// const reducedSum = numbers2.reduce(function (sum, num) {
//   return sum + num;
// },0);
// console.log('Sum: ',reducedSum);
const reducedSum = numbers2.reduce((sum, num) => sum + num,0);

console.log('Sum: ', reducedSum);


console.log('Sum: ', numbers2.reduce((sum, num) => sum + num,0));

// node Array/index3.js