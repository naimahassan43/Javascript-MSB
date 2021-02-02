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