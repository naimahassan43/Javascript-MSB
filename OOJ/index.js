/******** Factory Functions *****/

function user(name, age) {
    const userObj = {
        name,
        age,
        walk: function() {
            console.log('John Started Walking');
        },
    };
    return userObj;
}
const user1 = user('john', 40);
const user2 = user('Mary', 23);
console.log(user1, user2);

/******** Constructor Functions *****/
function User(name, age) {
    this.name = name;
    this.age = age;
    this.walk = function() {
        console.log('John started walking');
    };
}
const user3 = new User('Smith', 60);
console.log(user3);
// node OOJ/index.js