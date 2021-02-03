// Template literals
let Name = "smith";
console.log("My name is " + Name);
console.log(1 + 1);
let message = "Hi,\n How are you?";
console.log(message);

// Exercise:Person Object
// Properties: name, age, isMarried, homeAddress, friends

let person = {
  name: 'john',
  age: 49,
  isMarried: true,
  homeAddress: {
    long: 83.33,
    lat: 24.44,
  },
  friends: ['jeff', 'merry','john']
};
// console.log(person);
console.log(person.age);
console.log(person.homeAddress.lat);
console.log(person.friends[1]);

/*****************JS Operators***********************/
// Arithmetic Operators

let num1 = 19;
let num2 = 2;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1%num2);
console.log(36 % 2);

// Assignment Operators =
num1 += 2;

// Comparison Operators 
// < > >= <= === !==

let price = 100;

console.log(price>200);
console.log(price>=100);
console.log(price==100);
console.log(price!=100);

// Logical Operators and(&&), or(||), not(!) 

let tk = 15;
console.log(tk>50 && tk<15);
console.log(tk>50 || tk<=15);
console.log(!(tk<=15));
console.log(tk>50 || tk!=15);

// Equality Operators === !== data type & value both checked for triple ===

//Exercise- Swap two numbers
// a= 10, b=20
//After swapping a and b 
// a=20, b=10

let a = 10;
let b = 20;

let temp = a; //temp=10
a = b; //a=20,b=20
b = temp;

console.log(a,b)

// ***********Conditional statements*************//
//If ..else

let number = 0;
if (number > 0) {
  console.log("This is a positive number");
} else if (number < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is zero");
}
//Switch..case 

let color = 'blue';

switch (color) {
  case 'red':
    console.log('This is red');
    break;
  case 'white': 
    console.log('This is white');
    break;
  case 'green':
    console.log('This is green');
    break;
  default:
    console.log('This is not a valid color');
}

// Ternary Operators

let n1 = 10;
let n2 = 2;
let maxValue;

let max = n1>n2?n1:n2;   // if (n1 > n2) maxValue = n1;
   // else maxValue = n2;

console.log(max);

let number1 = 13;
console.log(number1 % 2 === 0 ?"Even Number":"Odd Number");
//Problem:FizzBuzz
//Take a number 
//If it is divisible by 3, print Fizz
//If it is divisible by 5, print Buzz
//If it is divisible by both 3 & 5, print FizzBuzz
//Otherwise, print Nothing

let fizzNumber = 30;

if (fizzNumber % 3 === 0 && fizzNumber % 5 === 0) {
  console.log("This is FizzBuzz");
} else if (fizzNumber % 3 == 0) {
  console.log("This is Fizz");
} else if (fizzNumber % 5 === 0) {
  console.log("This is Buzz");
} else {
  console.log("Nothing to show!!");
}

// Solve using Ternary operator
console.log(fizzNumber % 3 === 0 && fizzNumber % 5 === 0
  ? "FizzBuzz" : fizzNumber % 3 == 0 ? "Fizz" : fizzNumber % 5 === 0
    ? "Buzz" : "Nothing"); 
//Problem: check a year is leap year or not 
//1. Pick a year
//2. if the year is divisible by 400, then it is a leap year
//3. if the year is divisible by 4 and not divisible by 100, it is a leap year
//4. otherwise, the year is not a leap year
let year = 2001;

if (year % 400 === 0) {
  console.log("This Year is a leap year")
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log("This Year is a leap year");
} else {
  console.log("This Year is not a leap year");
}