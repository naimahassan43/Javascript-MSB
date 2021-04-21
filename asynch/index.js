/**********Asynchronous function**********/
console.log('Before');

function fetchUser() {
    setTimeout(function() {
        console.log('Fetching user from database');
        return {
            name: 'john',
            age: 47

        }
    }, 2000);
}

const user = fetchUser();
console.log(user);

console.log('After');
// node asynch/index.js