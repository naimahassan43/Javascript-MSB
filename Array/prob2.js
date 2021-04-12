//Prob: Even Max

const evens = [101, 118, 123, 132,133];

let maxValue = -1;
for (let num of evens) {
  if (num % 2 === 0) {
    if (maxValue < num) {
      maxValue = num;
    }
  }
}
console.log(maxValue);

const onlyEvens = evens.filter((num) => {
  return num % 2 === 0;
});
console.log(onlyEvens);

console.log(Math.max(...onlyEvens));

const evenMax = onlyEvens.reduce((maxValue, num) => {
  if (maxValue < num) return num;
  return maxValue;
}, -1);

console.log(evenMax);