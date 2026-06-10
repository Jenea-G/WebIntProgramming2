console.log("=====");
console.log("callback functions");

function sayHello(name) {
  console.log("Hello " + name);
}

// sayHello("Jane");

function doSomethingLater(callback) {
  console.log("Doing setup...");
  console.log("Loading...");

  callback(); // the argument/parameter callback
  // is a function, not an integer or any
  // other data type.
}

// we have to pass the function as an argument
// to the doSomethingLater function.
doSomethingLater(() => {
  sayHello("Jane");
  //   console.log("Hello"); // this is our argument
});

doSomethingLater(() => {
  console.log("Nice to meet you!");
});
