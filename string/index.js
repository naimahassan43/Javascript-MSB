let country = 'Bangladesh';            //node string/index.js

console.log(country);
// console.log(typeof country);
// console.log(country[4]);
// console.log(country.charAt(4));
// console.log(country.charAt(12));
// console.log(country[12]);
// console.log(country.length);

//String Methods
let message = "Please repeat the 'repeat' word";

// console.log(message.charAt(2));
// console.log(message.charCodeAt(2));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.includes('repeat'));
// console.log(message.startsWith('Please'));
// console.log(message.endsWith('please'));
// console.log(message.includes('repeat',14));
// console.log(message.startsWith('the',14));
// console.log(message.endsWith('repeat', 13));

//String Methods: Search, indexOf, lastIndexOf

// console.log(message.search('repeat'));
// console.log(message.indexOf('repeat'));
// console.log(message.indexOf('repeat', 14));
// console.log(message.lastIndexOf('repeat'));
// console.log(message.lastIndexOf('repeat', 14)); //0-13
// console.log(message.lastIndexOf('repeaty'));

//String Methods: toString, Concat,split
let temp = 123;
console.log(typeof temp);
console.log(temp.toString());
console.log(typeof temp.toString());

let tempBol = false;
console.log(typeof tempBol);
console.log(tempBol.toString());
console.log(typeof tempBol.toString());

let tempArr = [1, 2, 3];
console.log(typeof tempArr);
console.log(typeof tempArr.toString());

//Concat
let m1 = 'Hi!';
let m2 = " How's";
let m3 = ' Everything?';

let m = m1.concat(m2, m3);
console.log(m);
let m4 = m1 + m2 + m3;
console.log(m4);

//Split 
let msn = "Please repeat 'the following' words.";
// console.log(msn.split(' '));
// console.log(msn.split("'"));
// console.log(msn.split(''));
// console.log(msn.split('',4));

//String Methods: slice, subStr, subString 

console.log(msn.slice(0, 6)); // 0-5
// console.log(msn.slice(3, 9)); 
// console.log(msn.slice(5)); 
// console.log(msn.slice()); 
// console.log(msn.slice(-6,-1)); 

console.log(msn.substring(0, 6));
console.log(msn.substr(0,13))
