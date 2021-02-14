//Factorial
//Factorial of 6 =1x2x3x4x5x6

let fact = 1;
let num =10;

for (let number=1; number <= 10; number++) {
  fact = fact * number;
}
console.log('factorial of ' + num + ' = '+ num+'!' + ' = ' + fact);