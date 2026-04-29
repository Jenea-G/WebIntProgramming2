const myPassword = "123pass";

function checkPassword(password) {
    const promise = new Promise((resolve, reject) => {
        if (password === myPassword) {
            setTimeout(() => {
                resolve("Login successful");
            }, 2000);
        } else {
            reject("The entered password is not correct");
        }
    })

    // console.log(promise) // to check what it gives
    return promise;
}

checkPassword("something")
    .then((result) => {
        console.log(result); // if condition pass
    })
    .catch((error) => {
        console.log(error); // if condition fails
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