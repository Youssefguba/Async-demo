const fb = new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Conntect with Facebook ...`)
        resolve(`Facebook`);
    }, 2000);
});
const twitter = new Promise((resolve) => {
    setTimeout(() => {
        console.log(`Conntect with Twitter ...`)
        resolve(`Twitter`);
    }, 2000);
});

// Promise.all([FacebooK =  fb, TwitteR =  twitter])
//         .then(result => console.log(result))
//         .catch(err => console.log(`Error`, err.message));

Promise.race([FacebooK =  fb, TwitteR =  twitter])
        .then(result => console.log(result))
        .catch(err => console.log(`Error`, err.message));