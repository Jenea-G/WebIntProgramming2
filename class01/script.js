// alert("Hello World")
// console.log('hello world')

// VARIABLES

// let $ const
let number = 10; // let - can be changed
number = number + 1;

console.log(number);

const courseName = "Web inerface progr. 2"; // const cannot be changed
console.log(courseName);

let numbers = [1, 2, 3]
numbers.push(4);
console.log(numbers);

const grades = [80, 90, 100];
grades.push(75); // we cannot change the variable but we can change the array it's pointing to.


// JS Object

/**
* block scope!
* Scope protects variables and prevents misuse.
**/

a = 5;
if (a === 5) {
    let message = "You guessed the number";
    console.log(message);
}

// console.log(message);
// Warning: This wouldn't work, because message is in the conditional's scope and not accessible.

function showUser() {
    const name = "Mina";
    console.log(`${name} is logged in`);
}

// console.log(name);
// Warning: This wouldn't work, because name is in the function's scope and not accessible.

/**
 * Mini check in
 */

// let of const?
let page = 1 // the page could change as there're more than one page
const maxItems = 20; // the max number is unchanged
const categories = ["movies", "books"]; // this is not going to change, we can add a category by pushing into the array, but we cannot overwrite categories with smth else


/**
 * Functions
 */

// we take an argument/parameter in this function
// this is a void function it executes smth but doesnt return anything and couldnt be assigned to a variable
function greetUser(name) {
    console.log("Hello, " + name + "! I hope you are good.")
}

const name = "Nora";
greetUser(name);

// return fucntion, executes smth and returnes a value, can be assigned to a variable
function add(a, b) {
    return a + b;
}
const result = add(3, 5);
console.log("Result is: " + result);

// ===============================
// MINI EXERCISE
const firstName = "Jane";
const lastName = "Doe";

const fullName = addName(firstName, lastName);

// 1.
// return function that adds name and returns it to full name
function addName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 2.
// greet the user with fullName
function greet(name) {
    console.log("Hello " + name + "!");
}
greet(fullName);

// DOM
document.getElementById("title").innerText = greet(fullName);

/**
 * One responsibility per function!
 */

function calculateTotal(price, quantity) {
    return price * quantity;
}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

const totalPrice = calculateTotal(20.99, 3)

console.log(totalPrice);
console.log(formatPrice(totalPrice));

/**
 * array and loops
 */

const fruits = ["apple", "banana", "orange", "cherry"];

console.log(fruits);
console.log(fruits[0]); // first element
console.log(fruits[(fruits.length - 1)]) // last element

console.log("===========");
console.log("with lambda:");
fruits.forEach((fruit) => console.log(fruit));

console.log("===========");
console.log("with callback function:");
fruits.forEach(function (fruit) { console.log(fruit); });

console.log("===========");
console.log("with for loop");
for (const fruit of fruits) {
    console.log(fruit);
}

console.log("===========");
console.log("with indexes loop");
for (let i = 0; i < fruits.length; i++) {
    if (i >= 1) { // optional if we dont want to start from the first one
        console.log(fruits[i]);
    }
}

console.log("===========");
console.log("with while loop");
let index = 0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

/**
 * find function
 */

const prices = [10, 20, 30, 40];

const firstBigPrice = prices.find(function (price) {
    return price > 25;
});
console.log(firstBigPrice);

const expensivePrices = prices.filter(function (price) {
    return price > 25;
});
console.log(expensivePrices);

/**
 * Map function
 */

const formattedPrices = prices.map(function (price) {
    return "$" + price;
});
console.log(formattedPrices)

/**
 * Objects
 */

const product = {
    name: "Keyboard",
    price: 49.99,
    inStock: true,
    describe: function () {
        return this.name + " costs $" + this.price;
    },
};

console.log(product.name);
console.log(product.describe());