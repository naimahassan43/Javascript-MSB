
const user = {
  name: 'john',
  age: 47,
  hobby: 'reading',
  isMarried: true,
};
console.log(user);
//Property Access in Object with Dot 
console.log(user.hobby);
//Property Access in Object with Bracket
// console.log(user['age']);

/*Object Manupulation: Adding, Modifying, Deleting*/

//Add 
user.email = 'john@gmail.com';
user['phone'] = '01911111';

//Update
user.isMarried = false;
user.age = user.age + 3;

//Delete
delete user.email;
console.log(user);

/****** Object Methods & this keyword *******/
const user1 = {
  name: 'john',
  age: 55,
  isMarried: true,
  friends: ['Mary', 'Smith'],
  selectedColor: null,
  calculateAge: function () {
    console.log(`I am ${this.age} years old`);
  }
};
user1.calculateAge();
/******Traversing Object Entries *******/
const user2 = {
  name: 'john',
  age: 47,
  gender: 'male',
  email: 'john@gmail.com',
  phone:'01911111'
};
//==========Way1
for (let key in user2) {
  console.log(key, user2[key]);
}
//============Way2
console.log(Object.keys(user2));
console.log(Object.values(user2));
//============Way3
for (let val of Object.values(user2)) {
  console.log(val);
}
// node object/index.js