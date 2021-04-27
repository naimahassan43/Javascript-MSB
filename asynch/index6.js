/********** Async Await **********/

// fetchUser(123)
//     .then(user => sendMail(user.email))
//     .then(response => console.log(response))
//     .catch(err => console.log(err.message));

async function dbInfo() {
    try {
        const user = await fetchUser(123);
        const response = await sendMail(user.mail);

        console.log(response);
    } catch (err) {
        console.log(err.message);
    }

}

dbInfo();

function fetchUser(userID) {

    const promise = new Promise((resolve, reject) => {

        setTimeout(function() {
            console.log('Fetching user from database...');
            const user = {
                id: userID,
                name: 'john',
                email: 'john@gmail.com'
            };

            // resolve(user);
            reject(new Error('error!!'));

        }, 2000);
    });
    return promise;
}


function sendMail(userMail) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Sending email to user...');
            const response = { success: true };
            resolve(response);
        }, 2000);
    });
    return promise;

}
// node asynch/index6.js