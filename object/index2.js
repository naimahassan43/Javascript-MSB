/*** JSON **/

const user = {
  name: 'john',
  age: 47
};

//Object to JSON: stringify

const jsonData = JSON.stringify(user);
console.log(jsonData);
//JSON to Object :parse
console.log(JSON.parse(jsonData));

// node object/index2.js