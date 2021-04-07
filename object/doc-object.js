
// Problem: Doctor Object

//3 properties:name, designation, clinic
// 1 method: operation
const docObject = {
  name: 'john',
  designation: 'Cardiologist',
  clinic: {
    name: 'Happy Care Center',
    address: {
      lat: 90.44,
      long: 23.66
    },
  },

  operation: function () {
    console.log('He has started doing operation');
  },
};

// const { name, designation, clinic } = docObject;
// const { name: clinicName, address } = clinic;
// const { lat, long } = address;
//===Convert 3 line destructuring into 1 line===// 
const { name, designation, clinic:{ name: clinicName, address:{ lat, long } } } = docObject;

console.log(clinicName);


/******** Traversing**********/

for (let prop in docObject) {
  console.log(prop, docObject[prop]);
}
// node object/doc-object.js