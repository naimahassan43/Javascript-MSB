/*************Basic Functions**************/
//Function Declaration

function aboutMe(name,age) {
  const message = `I am ${name} and I am ${age} years old.`;
  console.log(message);
}
//Function Call
aboutMe('John', 20);

function calSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let result = calSum(19, 30);
console.log(result);

/*************Default Parameters**************/

function addThreeNumbers(num1, num2=10, num3=64) {
  const sum = num1 + num2 + num3;
  return sum;
}
console.log(addThreeNumbers(19));

/************* Hosting, Function as Expression **************/
//Hosting
function calcSum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
console.log(calcSum(5, 6));

//Function Expression

const val = 10;
const calcSumExp = function (num1, num2) {
  const sum = num1 + num2;
  return sum;
}
console.log(calcSumExp(10, 49));

/************* Arrow Function  **************/

const calcSumArr = (num1, num2) => num1 + num2;
console.log(calcSumArr(10, 20));

const mulByTwo =  num1 => num1 * 3;
console.log(mulByTwo(9));

// node function/index.js


