/*
  Sub-Problem 1
  -------------
  *
  **
  ***
  ****
  *****
*/

for (let row = 1; row <= 5; row++){
  let stars = '';
  for (let col = 1; col <= row; col++){
    stars = stars + '*';
  }
  console.log(stars);
}
/*
  Sub-Problem 2
  -------------
  *****
  ****
  ***
  **
  *
*/
for (let row = 5; row >= 1; row--) {
  let stars = '';
  for (let col = 1; col <= row; col++) {
    stars = stars + '*';
  }
  console.log(stars);
}

/*
  Sub-Problem 3
  -------------
      *
     **
    ***
   ****
  *****
 */
for (let row = 1; row <= 5; row++) {
  let star = '';
  for (let space = 1; space <= 5 - row; space++) {
    star = star + ' '; 
  }
  for (let col = 1; col <= row; col++) {
    star = star + '*';
  }
  console.log(star);
}
/*
  Sub-Problem 4
  -------------
  1
  12
  123
  1234
  12345
*/
for (let row = 1; row <= 5; row++){
  let num = '';
  for (let col = 1; col <= row; col++){
    num = num + col;
  }
  console.log(num);
}
/*
  Sub-Problem 5
  -------------
  12345
  1234
  123
  12
  1
*/
for (let row = 5; row >= 1; row--){
  num = '';
  for (let col = 1; col <= row; col++){
  num = num + col;
  }
  console.log(num);
}
 /*
  Sub-Problem 6
  -------------
  54321
  5432
  543
  54
  5
*/
for (let row = 1; row <= 5; row++){
  let num = '';
  for (let col = 5; col >= row; col--){
    num += col;
  }
  console.log(num);
}
/*Sub-Problem 7
  -------------
//   1
//   01
//   101
//   0101
//   10101
*/
for (let row = 1; row <= 5; row++){
  let num = '';
  let binary = row % 2 === 0 ? 0 : 1;
  for (let col = 1; col <= row; col++){
    num = num + binary;
    binary = binary === 0 ? 1 : 0;
  }
  console.log(num);
}

/*
  Sub-Problem 8
  -------------
  12345
  2345
  345
  45
  5
*/

for (let row = 1; row <= 5; row++){
  let num = '';
  for (let col = row; col <= 5; col++){
    num = num + col;
  }
  console.log(num);
}