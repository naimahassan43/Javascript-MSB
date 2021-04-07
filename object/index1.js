//**********************Cloning an Object**********************/
const user = {
  name: 'john',
  age: 47,
};

//==========Way1 =============//

// const copiedUser = {};

// for (let key in user) {
//   // console.log(key, user[key]);
//   copiedUser[key] = user[key];
// }

//==========Way2: assign operator//
// const copiedUser = Object.assign({}, user);

//==========Way3//

const copiedUser = { ...user };
console.log(copiedUser);

//********************** Math Object**********************/

console.log(Math.PI);
console.log(Math.random());

console.log(Math.round(1.4));
console.log(Math.floor(1.4));
console.log(Math.ceil(1.4));

console.log(Math.max(12,32,87,-87,0));
console.log(Math.min(12,32,87,-87,0));
// node object/index1.js