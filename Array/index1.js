/********* Iterarte an array **********/

const numbers = [6, 8, 9, 3, 9];

for (let index = 0; index < numbers.length; index++) {
  console.log(index, numbers[index]);
}

for (let num of numbers) {
  console.log(num);
}

// numbers.forEach(function (num, index) {
//   console.log(num, index);
// });

numbers.forEach( (num, index) =>
  console.log(num, index));
// node Array/index1.js