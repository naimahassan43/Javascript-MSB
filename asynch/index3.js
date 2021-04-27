/********** Promise **********/

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        // resolve(1);
        reject(new Error('Error!!!'));
    }, 2000);
});

// console.log(promise);

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err.message);
    });
// node asynch/index3.js