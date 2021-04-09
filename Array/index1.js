/********* Iterate an array **********/

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

/********* Sorting and Reversing an array **********/

let numbrs = [3, 5, 6,1,2, 8, 7];
numbrs.sort();
numbrs.reverse();
console.log(numbrs);

let doctors = [
  {name: 'john', age:46},
  {name: 'smith', age:36}
];

// doctors.sort(function (a, b) {
//   if (a.age > b.age) return +1;
//   if (a.age === b.age) return 0;
//   if (a.age < b.age) return -1;
// });
// doctors.sort(function (a, b) {
//  return (a.age - b.age) ; 
// });

doctors.sort( (a, b)=> (a.age - b.age));
console.log(doctors);

let nums = [2, 4, 6, 5,10, 21];
nums.sort((n1,n2)=> n1-n2);
console.log(nums);
// node Array/index1.js