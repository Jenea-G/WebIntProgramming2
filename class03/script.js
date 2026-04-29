// Promises

// Javascrit is often asynchronous

console.log("hello");
console.log("Bye");

// This is not a normal top to bottom flow!
// console.log("start");
// setTimeout(() => {
//    console.log("middle");
// }, 1000); // some work is delayed here.
// console.log("end");

            // We have an object of type Promise
            // it represents a state (PromiseState) ---> resolved/fulfilled
            // it has a PromiseResult ---> the string in this case
const promise =  Promise.resolve("Hello from a resolved promise.");
console.log(promise);

// A promis is an object representing the eventual result of an asynchrounous operation.
// In simpler words: A promise is a value that is not ready yet, but will be ready later -- or may fail!

// const failedPromise = Promise.reject("Something went wrong");
// console.log(failedPromise);

// Three states of promise:
// 1. Pending : still waiting
// 2. fulfilled : completed successfully
// 3. rejected : failed!

// Visually: 
//    pending --> fulfilled or pending --> rejected

// IMPORTANT: conceptual distinction

const value = Promise.resolve(42); // here we're not giving 42 directly
                                            // we are making a Promise object

console.log(value)

// Consuming Promises with .then() and .catch()

// .then() runs when the promise is fulfilled.
// it receives the resolved value!

// .catch() runs when the promise is rejected
// it receives the error or rejection reason.


// Basic Resolved Promise:
Promise.resolve("Hello World").then((result) => {
  console.log(result);
});

// Basic Rejected Promise
Promise.reject("Failed to load").catch((error) => {
  console.log(error);
});

// Both success and failure flow

const success = true;

// we're promising an outcome based on success or reject
const myPromise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Operation Successful"); // resolve can hold any value
    } else {
        reject("Operation Failed.");
    }
});

myPromise
.then(result => {
    // for when it's resolved
    console.log("--------------");
    console.log(result);
})
.catch((error) => {
    // for when it's rejected
    console.log("--------------");
    console.log(error);
});

// IMPORTANT

// A Promise is not magic
// It is often wrapping asynchronous work.
// such as timer, or HTTP requests