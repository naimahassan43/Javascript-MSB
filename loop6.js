for (let year = 1800; year <= 2000; year++) {
  if (year % 400 === 0) {
    console.log(year + ' is a leap year');
  } else if (year % 4== 0 && year % 100 !== 0){
    console.log(year + ' is a leap year');
  }
}