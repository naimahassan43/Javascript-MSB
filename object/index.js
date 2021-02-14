//node object/index.js
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
console.log(user['age']);

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
