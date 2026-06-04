// 1.
// Create a Book class with:
//  title
//  pages
//  getter summary
//  getter/setter for pages
//  static method isValidPageCount()
console.log("=== Ex.1 ====");
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  get summary() {
    return `The book '${this.title}' has ${this.pages} pages.`;
  }

  static isValidPageCount(value) {
    return value > 0;
  }

  set pages(value) {
    if (Book.isValidPageCount(value)) {
      this.__pages = value;
    } else {
      throw new Error("The number of pages should be more than 0");
    }
  }

  get pages() {
    return this.__pages;
  }
}

const b1 = new Book("The War and Peace", 500);
console.log(b1.summary);
console.log(b1.pages);
// b1.pages = 0;

// 2.
// Create a BankAccount class with:
//  owner
//  balance
//  getter for balance
//  setter that rejects negative balances
//  static method isValidAmount()

// 3.
// Create a Course class with:
//  title
//  credits
//  getter label
//  getter/setter for credits
//  static property for schoolName

// 4.
// Create a class called Movie.

// Code the following:
//  constructor with title and rating
//  getter description that returns something like:
//  "Inception has a rating of 9"
//  getter/setter for rating
//  setter must reject values outside 0–10
//  static method isValidRating(value)
