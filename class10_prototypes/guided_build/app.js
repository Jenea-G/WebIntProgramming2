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
