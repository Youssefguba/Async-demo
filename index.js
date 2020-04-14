console.log("Before");

/*
Callbacks method
*/ 
getUser(1, (user) => {
    getRepostiories(user.gitHubUserName, (repos) => {
        getCommits(repos[0], (commit) => {
            console.log(commit);
        });
    });
});

/*
Promise method
*/ 
getUser(1)
        .then(user => getRepostiories(user.gitHubUserName))
        .then(repos => getCommits(repos[0])) 
        .then(commits => console.log(`Commits`, commits))
        .catch(err => console.log('Error', err.message));


/*
Async/await method
*/ 
async function displayCommmits() {
    try {
        const user = await getUser(1);
        const repos = await getRepostiories(user.gitHubUserName);
        const commits = await getCommits(repos[0]);
        console.log(`Commits`, commits);
    } catch (err) {
        console.log('Error is', err.message);
    }

}
displayCommmits();

console.log("After");

function getUser(id) {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            console.log("Reading from User ...");
            resovle({ id: id, gitHubUserName: `Youssefguba` });
        }, 1000);
    });
}

function getRepostiories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API ...');
            resolve({ username: username, repositiores: [`repo1`, `repo2`, `repo3`] });
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API ...');
            resolve(['commits']);
        }, 2000);
    });
}