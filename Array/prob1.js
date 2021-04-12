//Prob: Odd sum

const odds = [10, 11, 12, 13];

// let sum = 0;

// for (let num of odds) {
//   if (num % 2 === 1) {
//     sum += num;
//   }
// }
// console.log(sum);

// const onlyOdd = odds.filter((num) => num % 2 === 1);
// console.log(onlyOdd);
// const oddSum = onlyOdd.reduce((sum, num) => sum + num, 0);
// console.log('Sum of Odd numbers: ',oddSum);

const oddSum = odds.filter((num) => num % 2 === 1).reduce((sum, num) => sum + num, 0);
console.log('Sum of Odd numbers: ',oddSum);console.log('Sum of Odd numbers is ',oddSum);
// node Array/prob1.js