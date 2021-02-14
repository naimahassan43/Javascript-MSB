let number = 12345678;

let lastDigit = number % 10;
console.log(lastDigit + ' is last digit of the number ' + number);

while (number >= 10) {
  number = parseInt(number / 10);
}

let firstDigit = number;
console.log(firstDigit + ' is first digit of the number ' + number);
