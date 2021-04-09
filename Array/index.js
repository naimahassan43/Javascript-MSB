/****** Basic Array*******/
let friends = ['f1', 'f2', 'f3'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
/****** Element insert in an Array*******/

const numbers = [12, 13, 14, 15];
// numbers.unshift(9, 10, 11); // insert into first position
// numbers.push(16, 17, 18);// insert into last position
numbers.splice(3, 0, 110,111);// insert into middle position
console.log(numbers);
/****** Remove Element *******/

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numb.shift();
// numb.shift();

// numb.pop();

numb.splice(2, 2);
console.log(numb);


/***************** Finding an element(Primitive type) ************/

const numbrs = [1, 2, 3, 2, 5, 2, 7];

console.log(numbrs.includes(3));
console.log(numbrs.includes(3, 3));
console.log(numbrs.indexOf(5));
console.log(numbrs.lastIndexOf(2));
/***************** Finding an element(Reference data type) ************/

//finding object in Array

const doctors = [
  { name:'john', age:28},
  { name:'mary', age:32},
  { name:'smith', age:29},
];

// const result = doctors.find(function (doctor) {
//   // return doctor.name === 'mary';
//   return doctor.age>30;
// });

// const result = doctors.findIndex(function (doctor) {
//   return doctor.name === 'mary';
  
// });

// const result = doctors.findIndex( (doctor) =>
//    doctor.name === 'mary');
// console.log(result);
console.log(doctors.findIndex( (doctor) =>
   doctor.name === 'smith'));
// node Array/index.js