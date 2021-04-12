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
console.log(a,b,c,d);
// node ES6-ES7-ES8/index.js