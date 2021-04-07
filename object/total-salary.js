//Exercise: Total salaries
const salaries = {
  john: 3000,
  smith: 20000,
  mary: 15000,
  jhilmil: 23000,
  asma: 25000
};

let sum = 0;

//============ Way1 =================//
// for (let key in salaries) {
//   console.log(key, salaries[key]);
//   sum += salaries[key];
// }
// console.log(sum);

//========== Way2 =================//

// console.log(Object.values(salaries));

for (let val of Object.values(salaries)) {
  sum += val;
}
console.log('Total salaries = ', sum);
// node object/total-salary.js