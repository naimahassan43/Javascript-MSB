/******* Area of Circle *******/
// Area = PI * r* r 
//PI = 3.1416

//Way1: Function Declaration

// function areaOfCircle(radius) {
//   return 3.1416 * radius * radius;
// }
// console.log(areaOfCircle(4));


//Way2: Function Expression

// const areaOfCircle = function (radius) {
//   return 3.1416 * radius * radius;
// }
// console.log(areaOfCircle(2));

//Way3: Arrow Function [Recommended]

const areaOfCircle = (radius) =>  Math.PI * radius * radius;
console.log(areaOfCircle(2));

/******* Max of Arguments *******/
function maxOfArguments(...args) {
  let maxValue = -1;
  for (let i = 0; i < args.length; i++){
    if (maxValue < args[i]) {
      maxValue = args[i];
    }
  }
  return maxValue;
}

let result = maxOfArguments(13, 24, 67, 23, 200);
console.log(result);
// node function/exercise.js