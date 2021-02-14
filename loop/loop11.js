let number = 123456;
let sum = 0;

while (number > 0) { 
  let lastDigit = number % 10;
  sum += lastDigit;

  number = parseInt(number / 10);
}
console.log(sum);