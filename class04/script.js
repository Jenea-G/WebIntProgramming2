// Promises and js objects

let student = {
    id: 1, name: "Alice", role: "Student"
};

console.log(student);
let auth = true;

function loadUserData() {
    let promise = new Promise((resolve, reject) => {
        if (auth === true) {
            resolve(student);
        } else {
            reject("Authentication failed")
        }
    })
    return promise;
}

loadUserData()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

// API --> Application Programming Interface
// API : a set of rules and protocols that allow different software appllications to communicate with one another.

// An important aspect of why we use Promises :
// The term --> concurrency.
// Modern computers can run multiple code at the same time!

// Promises wrap these eventual outcomes for us, so that we don't have to wait until the outcome is present.

/**
 * Chains in Promises!
 */

Promise.resolve(5).then((result) => {
    // console.log(result * 2);
    console.log(`Step 1 ${result}`)
    return result * 2;
}).then((result) => {
    result + 20
    console.log(`Step 2 ${result}`)
    return result;
}).then((result) => {
    let newResult = result * 100
    console.log(`Step 3 ${newResult}`)
})

// Let's try with our student.

const output = document.getElementById('output');

loadUserData()
    .then((user) => {
        console.log(`Username ${user.name}`);
        return user.name;
    }).then((name) => {
        return name.toUpperCase();
    })
    .then((name) => {
        output.textContent = `Hello, ${name} !`;
    })
    .catch((error) => {
        output.textContent = error;
    });

