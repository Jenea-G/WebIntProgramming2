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

/**
 * Static properties and methods
 */

// static members belong to the class itself, and not to
// individual objects.

// they're used like : ClassName.member
//  and NOT: instance.member

// static metohds and properties help us to use
// in different situations.
// mostly used as helper functions!
class MathHelper {
  // add belongs to the class, not to any one MathHelper object;
  static add(a, b) {
    return a + b;
  }
}

result = MathHelper.add(2, 3);
console.log(result);

//                      ::::PAY ATTENTION:::::
// const helper = new MathHelper();
// helper.add(2, 3); // this would throw an error, because
//                   the method belongs to the class.

class Student {
  static counter = 0;

  constructor(name) {
    this.name = name; // this. belongs to the object
    // this.counter += 1; // this would only update once!
    Student.counter += 1; // Student. belongs to class
  }
}

const s1 = new Student("Jane");
const s2 = new Student("Joe");

console.log(`We have a total of ${Student.counter} students`);

class Product2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static isValidPrice(value) {
    return typeof value === "number" && value >= 0;
  }

  set price(value) {
    if (Product2.isValidPrice(value)) {
      this.__price = value;
    } else {
      throw new Error("Wrong price");
    }
  }

  get price() {
    return this.__price;
  }
}

new_product = new Product2("Mouse", 25);
// new_product2 = new Product2("Laptop", -25);

console.log(new_product.price);
