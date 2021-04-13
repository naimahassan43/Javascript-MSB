/********** Error Handling **********/
function div(a, b) {
  if (b === 0) {
    throw new Error("Second Parameter can't be zero!");
  }
  return a / b;
}


try {
  console.log(div(4, 0));
}
catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
 }
finally {
  console.log("Finally works finally");
}
console.log("Hello!");


// node error/index.js