//Prob:Books
//1) Take all the books with price less than 500 and rating greater than 4
//2) Sort them by their rating in descending order
//3) Pick their name

const books = [
  {name:'book1',price: 450,rating:4.1},
  {name:'book2',price: 470,rating:5},
  {name:'book3',price: 350,rating:3.1},
  {name:'book4',price: 600,rating:4.5}
];

const filteredBook = books.filter((book)=> book.price < 500 && book.rating > 4);
console.log(filteredBook);

//2) Sort
const sortedBooks = filteredBook.sort((b1, b2) => b2.rating - b1.rating

//   {return (b1.rating < b2.rating) ? +1 : -1;
  // if (b1.rating < b2.rating) return +1;
  // return -1;}
  );
console.log(sortedBooks);

//3)

const onlyNames = sortedBooks.map( (b1) => b1.name);

console.log(onlyNames);

// same above : using ES6
const onlyName= books
  .filter((book) => book.price < 500 && book.rating > 4).sort((b1, b2) => b2.rating - b1.rating)
  .map((b1) => b1.name);
  console.log(onlyName);
//node Array/prob3.js