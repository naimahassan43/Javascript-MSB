//Array & Object destructuring

/******* Object Destructuring******/
function greeting({name,age,address:{lat, long }}) {
  // const {name,age,address:{lat, long }} = user;//Destructuring
  
  console.log(
    `Hello ${name} (${age}) from ${long},${lat}`
  );
}

const user = {
  name: 'john',
  age: 47,
  address: {
    lat: 24.77,
    lon: 23.88,
  },
};
greeting(user);

/******* Array Destructuring******/

let [a,b,c,d] = [1, 2, 3, 4];
console.log(a, b, c, d);

/******* ES6 Data Structure: Set ******/

let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);
// console.log(set.size);

// set.delete(200);
// console.log(set);
// console.log(set.size);

for (let el of set) {
  console.log(el);
}

set.forEach((el) => console.log(el)); 

set.clear();
console.log(set);

/******* ES6 Data Structure: Map ******/
let map = new Map();
map.set('Fruits', 'Mango');
map.set('Animal', 'Tiger');
map.set('Score', 120);

console.log(map);

for (let el of map) {
  console.log(el);
}

// console.log(map.has('Orange'));

// map.delete('Animal');
// console.log(map);

console.log(map.values());
console.log(map.keys());
console.log(map.entries());

map.clear();
console.log(map);
// node ES6-ES7-ES8/index.js