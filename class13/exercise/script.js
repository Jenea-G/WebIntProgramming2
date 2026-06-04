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
console.log("=== Ex.1 ====");

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  static isValidAmount(value) {
    return value >= 0;
  }

  set balance(value) {
    if (BankAccount.isValidAmount(value)) {
      this.__balance = value;
    } else {
      throw new Error("The balance should be positive or equal to 0");
    }
  }

  get balance() {
    return this.__balance;
  }

  get info() {
    return `${this.owner} has a balance of ${this.balance}$`;
  }
}

// const acc1 = new BankAccount("Pam", -20);
const acc1 = new BankAccount("Pam", 20);
console.log(acc1.balance);
console.log(acc1.info);

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
