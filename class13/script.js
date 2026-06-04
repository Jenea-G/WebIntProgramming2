// getters, setters, statics

// what is a getter?

//      it lets an object expose a vale as if it were a property. even though the code itself might run behind the scenes.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // a getter function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("Joe", "Jones");
console.log(p1.firstName, p1.lastName);
console.log(p1.fullName);
// p1.fullName() - if it were a normal function, but this gives and error because a getter is accessed like a property.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // area is not stored directly, it is computed
  get area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(4, 6);
console.log(rect.area);

// why getters are useful?

//  in case, a value should be computed from other values
//  in case, (encouraged) you want cleaner syntax
//  in case, you want to hide implementation details

/**
 * Setters
 */

// setter lets you control what happens when someone assigns a value.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  set price(value) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this.__price = value;
  }

  get price() {
    return this.__price;
  }
}

const prod1 = new Product("Keyboard", 49.99);
console.log(prod1.price);

class User {
  constructor(username) {
    this.username = username;
  }

  // setter allows to have full control over how the value is being treated and then assigned.
  set username(value) {
    // .trim() - removes empty spaces
    this.__username = value.trim();
  }

  get username() {
    // will not work without setter as it has the same name as a property in a constructor "username"
    return this.__username;
  }
}

const u1 = new User(" t-rex   ");
console.log(u1.username);

class Bug {
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    // this.name = value; // recursive call!
    this.__name = value; // this is ok
  }

  get name() {
    // return this.name; // recursive call!
    return this.__name; // this is ok
  }
}

bug = new Bug("hi"); // throws an error if there are no setters
console.log(bug.name);
