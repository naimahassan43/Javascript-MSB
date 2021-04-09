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

/******Array: concat, slice *********/
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num = num1.concat(num2);
console.log(num);

const numbs = [1, 2, 3, 4, 5, 6,7,8];
// const sliceArray = numbs.slice(2,5);
const sliceArray = numbs.slice();
console.log(sliceArray);
// node Array/index2.js