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
// node Array/index.js