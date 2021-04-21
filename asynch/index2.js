/**********Callback hell**********/

fetchUser(123, function(user) {
    console.log(user);
    sendMail(user.email, function(response) {
        console.log(response.success);
    });
});

function sendMail(userMail, callback) {
    setTimeout(function() {
        console.log('Sending email to user...');
        const response = { success: true };

        callback(response);
    }, 2000);
}

function fetchUser(userID, callback) {
    setTimeout(function() {
        console.log('Fetching user from database...');
        const fetchedUser = {
            id: userID,
            name: 'john',
            email: 'john@gmail.com'
        };
        callback(fetchedUser);
    }, 2000);
}
// node asynch/index2.js