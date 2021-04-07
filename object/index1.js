//Cloning an Object
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
// node object/index1.js