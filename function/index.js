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
// node function/index.js


