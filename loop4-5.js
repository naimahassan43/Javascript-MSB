// let sum = 0;
// let sumOdd = 0;
// for (let index = 100; index <= 200; index += 2){
//   console.log(index);
//   sum += index;
// }
// for (let index = 1; index <= 200; index++) {
//   sumOdd += index;
// }
// console.log('Sum of Even numbers: ' + sum);
// console.log('Sum of Odd numbers: ' + sumOdd);

//Second Method:
let oddSum=0;
let evenSum=0;

for (let index = 1; index <= 100; index++){
  if (index % 2 === 0) {
    evenSum += index;
  } else {
    oddSum += index;
  }
}
console.log('Sum of Even numbers: ' + evenSum);
console.log('Sum of Odd numbers: ' + oddSum);