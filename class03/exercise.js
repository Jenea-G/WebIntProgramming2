const myPassword = "123pass";

function checkPassword(password) {
    const promise = new Promise((resolve, reject) => {
        if (password === myPassword) {
            setTimeout(() => {
                resolve("Your password is good");
            }, 2000);
        } else {
            reject("The entered password doesn't match");
        }
    })
    return promise;
}

checkPassword("something")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkPassword("123pass")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkPassword("onemorepass")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });