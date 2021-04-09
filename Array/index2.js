/******Array: every, some *********/
const numbers = [1, 2, -3, 4, 5, 6];

// const res = numbers.every(function (num) {
//   return num > 0;
// });
const res = numbers.some(function (num) {
  return num > 0;
});

console.log(res);

const even = [2, 3, 6, 8];

const alleven = even.some(function (num) {
  return num % 2 === 0;
});

console.log(alleven);
// node Array/index2.js