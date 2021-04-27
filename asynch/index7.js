/*********** Making Ajaxcall with Fetch Web API (promise)*************/

const gitAPI = fetch('https://api.github.com/users/andrew');

gitAPI
    .then((res) => res.json())
    .then(profile => console.log(profile))
    .catch((err) => console.log(err));

console.log(gitAPI);

/*********** Making Ajaxcall with Fetch API (AsyncAwait)*************/

async function getInfoFromGit() {
    try {
        const res = await fetch(`https://api.github.com/users/andrew`);

        const profile = await res.json();
        console.log(profile);
    } catch (err) {
        console.log(err);
    }
}

getInfoFromGit();

// node asynch/index7.js