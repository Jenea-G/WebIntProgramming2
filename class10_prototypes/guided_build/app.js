// constructor function for Book object

function Book(title, author, available = true) {
  this.title = title;
  this.author = author;
  this.available = available;
}

// add prototype methods

Book.prototype.borrow = function () {
  if (this.available) {
    this.available = false;
    return `${this.title} has been borrowed.`;
  }
  return `${this.title} is already borrowed.`;
};

Book.prototype.returnBook = function () {
  if (!this.available) {
    this.available = true;
    return `${this.title} has been returned.`;
  }
  return `${this.title} is already in my collection, your copy must have been borrowed somewhere else.`;
};

Book.prototype.displayInfo = function () {
  return `${this.title} by ${this.author} | Available: ${this.available}`;
};

// create two objects
const book1 = new Book("Clean Code", "Robert C. Martin");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", false);

// display the results in the page

const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  output.innerHTML = `
    <p>${book1.displayInfo()}</p>
    <p>${book1.borrow()}</p>
    <p>${book1.displayInfo()}</p>
    <hr>
    <p>${book2.displayInfo()}</p>
    <p>${book2.returnBook()}</p>
    <p>${book2.displayInfo()}</p>
  `;
});

// Inspect shared behaviour

console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.hasOwnProperty("title"));
console.log(book1.hasOwnProperty("displayInfo"));

Book.prototype.toggleAvailability = function () {
  this.available = !this.available;
  return `${this.title} availability is now ${this.available}`;
};

book1.toggleAvailability();
book2.toggleAvailability();

console.log("prouf that the methods are shared by the objects:");
console.log(book1.displayInfo === book2.displayInfo);
console.log(book1.toggleAvailability === book2.toggleAvailability);

// Prototype property!!
Book.prototype.category = "General";
console.log(book1.category);
console.log(book2.category);
