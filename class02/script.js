// alert('hi')

// asynchronous vs synchronous

// normal sequential code

console.log("start"); // 1
console.log("middle"); // 2 
console.log("end"); // 3

// in a sequential manner, code runs in order
// each line computes and completes before the next one

// different execution
console.log('=================');
console.log("now with time interval");
console.log("start");

// we could use setTimeout(), to run the code
// after a certain amount of time
setTimeout(() => {
    console.log("middle");
}, 1000);

// in the case above, the function inside setTimeout runs after 1000ms.

console.log("end");


console.log('=================');
console.log("callback function");

function sayHello(name) {
    console.log("Hello " + name)
}

function doSomethingLater(callback) {
    console.log("Doing setup...");
    console.log("Loading...");

    callback(); // the argument/parameter callback is a function, not an integer or any other data type
}

doSomethingLater(() => {
    // console.log("hello")
    sayHello("Jane");
})

// in this case of a callback, our function needs to be wrapped around an arrow function

doSomethingLater(() => {
    console.log("Nice to meet you")
})

// arrow function == lambda function!


// CONTINUATION concept

// is the next piece of work the program should do!
// it's often represented as a function to run later.

/**
 * DOM Review!
 */

// const title = document.querySelector("#title")
const title = document.getElementById("title");
const description = document.querySelector(".description");
const output = document.getElementById("output");

console.log(title);
console.log(description);
console.log(description.textContent);
console.log(output);

// to update DOM content !
output.textContent = "I would like to have one red banana";
const topics = ["Big Ben", "Statue of Liberty", "Chichen Itza"];

const topicList = document.getElementById("topic-list");

for (const topic of topics) {
    const li = document.createElement('li');
    li.textContent = topic;

    topicList.append(li);

}

/**
 * Event Handling!
 */

const button = document.getElementById("my-button");
console.log(button);

// we can have functions triggered by specific events.

button.addEventListener("click", () => {
    console.log("Button clicked.");
    output.textContent = "Oh hello there!";
});
// the example above is also a continuation/callback!

// READ an input on click

const nameInput = document.getElementById("name-input");

button.addEventListener("click", () => {
    // we are reading the text input!
    const name = nameInput.value.trim();
    output.textContent = "Oh hello " + name + "!";
});

/**
 * input event
 */

const previewOutput = document.getElementById("preview-output");

// typing/input as an event
nameInput.addEventListener("input", () => {
    console.log("typing...")
    previewOutput.textContent = `Typing ${nameInput.value}`;
});







