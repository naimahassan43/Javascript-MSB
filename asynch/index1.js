/**********Callback function**********/

fetchUser(123, function(user) {
    console.log(user);
});


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
// node asynch/index1.js