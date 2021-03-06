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

//Problem: Our Grading System 
//Take a Mark
//if the mark is in between 80-100,print "A+"
//if the mark is in between 70-79,print "A"
//if the mark is in between 60-69,print "A-"
//if the mark is in between 50-59,print "B"
//if the mark is in between 40-49,print "C"
//if the mark is in between 33-39,print "D"
//point out the invalid marks

let mark = 130;
if(mark<0 || mark>100){
  console.log('Invalid Mark!!')
}else if (mark >= 80 && mark <= 100) {
  console.log('A+');
}else if (mark >= 70 && mark <= 79) {
  console.log('A');
}else if (mark >= 60 && mark <= 69) {
  console.log('A-');
}else if (mark >= 50 && mark <= 59) {
  console.log('B');
}else if (mark >= 40 && mark <= 49) {
  console.log('C');
}else if (mark >= 33 && mark <= 39) {
  console.log('D');
} else {
  console.log('F')
}

/********Loops*************/

//for loop
for (let index = 1; index <= 3; index++){
  console.log('Hi!', index);
}
for (let index = 3; index >= 1; index--){
  console.log('Hello!',index);
} 

//while loop
let index = 1;
while (index <= 7) {
  console.log('Hello World!', index);
  index++;
}

console.log(index);

// do...while loop

let indx = 10;
do {
  console.log('Hello!', indx);
  indx++;
} while (indx <= 3);

console.log(indx);

//for...in
const obj = {
  name: 'John',
  age: '19',
};

for (let key in obj) {
  console.log(key, obj[key]);
}
let numbers = [1, 2, 3, 4];
console.log(numbers);

for (let index in numbers) {
  console.log(index, numbers[index]);
}
//for...of loop
for (let num of numbers) {
  console.log(num);
}

//Break & Continue
for (let index = 1; index <= 20; index++) {
  console.log(index);

  if (index === 9) {
    break;
  }
}
//continue: iterartion skip 
for (let index = 1; index <= 25; index++) {
  if (index % 2 === 1) {
    continue;
  }
  console.log(index); 
}

//Infinite loop
//Nested loop
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 7; j++) {
    console.log(i, j);
  }
}

/******* Exercise: Even Odd Numbers*******/

for (let index = 1; index <= 20; index++) {
  if (index % 2 === 1) {
    console.log(index + ' is an odd number');
  } else {
    console.log(index + ' is an even number');
  }
}

for (let index = 1; index <= 10; index+=2) {
  console.log(index + ' is an odd number');
}
//Exercise: Sum of all numbers in an array.
// numbers = [10, 20, 30, 40, 50]
// result = 150
let nums = [10, 20, 30, 40, 50];
let sum = 0;

for (let index = 0; index < nums.length; index++) {
  sum += nums[index];
}
console.log(sum);

//Prime numbers
//Prime numbers is only divisible by 1 and itself.
//Check 2, 3,...number-1 

let numPr = 10;

let isPrime = true;
for (let i = 2; i <= numPr-1; i++) {
  if (numPr % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) console.log('This is a prime number');
else console.log('This is not a prime number');
// 10 to 20 which are the prime numbers

let num_pr = 10;
for (let num_pr = 10; num_pr <= 20; num_pr++) {
  let isPrime = true;
  for (let i = 2; i <= num_pr - 1; i++) {
    if (num_pr % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) console.log(num_pr,'is a prime number');
}