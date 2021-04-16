// Create object using factory& constructor functions
//factory functions
const homeAddress1 = homeAddress('A', 'B', 'C');
const homeAddress2 = homeAddress('D', 'E', 'F');

function homeAddress(Street, city, zipCode) {
    return {
        Street,
        city,
        zipCode
    };
}

console.log(homeAddress1);
console.log(homeAddress2);

// constructor functions

const homeAddress3 = new HomeAddress('X', 'Y', 'Z');

function HomeAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
console.log(homeAddress3);
// node OOJ/exercise.js