// Suppose you create many similar objects.
const user1 = {
  name: "Alice",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};

const user2 = {
  name: "Mina",
  greet() {
    return `Hello, I am ${this.name}`;
  },
};
// This works, but each object has its own copy of == greet().

// If you create many similar objects, that becomes repetitive.

// A better approach is:
//      store each object’s own data on the object
//      store shared behavior in one shared place
// That shared place is the prototype.

// ====== 2. What is a prototype?
// A prototype is another object that JavaScript can check when a property or method is not found directly on the object itself.

// Very simple model:

// JavaScript checks the object
// if the property is not there, it checks the prototype
// This allows many objects to share the same method.

// ====== 3. Why is this useful?
// Prototypes help us:

// avoid repeating methods
// share behavior
// reduce duplication
// understand how JavaScript classes work underneath

// ====== 4. Main design idea
// Usually:
//      object-specific data belongs on the object
//      shared methods belong on the prototype

// Examples of object-specific data:
//      name
//      title
//      price
//      available

// Examples of shared behavior:
//      greet()
//      displayInfo()
//      borrow()
//      returnBook()

// ===== Part 2 — Small Examples

// Example A — duplicated methods on each object
const student1 = {
  name: "Alice",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

const student2 = {
  name: "Karim",
  introduce() {
    return `Hi, I am ${this.name}`;
  },
};

console.log(student1.introduce());
console.log(student2.introduce());
// This works, but introduce() is duplicated.

// Example B - constructor function

function Student1(name) {
  this.name = name;
}

const s1 = new Student1("Alison");
const s2 = new Student1("Karimi");

console.log(s1.name);
console.log(s2.name);

// Example C — shared method through the prototype

// function Student(name) {
//   this.name = name;
// }

// Student.prototype.introduce = function () {
//   return `Hi, I am ${this.name}`;
// };

// const s1 = new Student("Alice");
// const s2 = new Student("Karim");

// console.log(s1.introduce());
// console.log(s2.introduce());

function Student2(name) {
  this.name = name;
}

Student2.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

const s3 = new Student2("Alice");
const s4 = new Student2("Karim");

console.log(s3.introduce());
console.log(s4.introduce());
console.log(Object.getPrototypeOf(s3) === StudentD.prototype); //false

// Now both objects use the same shared method from Student2.prototype.

// Example D - inspect the relationship
function StudentD(name) {
  this.name = name;
}

StudentD.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};

const s1d = new StudentD("Alice");

console.log(Object.getPrototypeOf(s1d) === StudentD.prototype); //true

// Part 3 — Important Concept: Property Lookup
s1d.introduce();
// JavaScript looks in this order:

//    1. does s1 itself have introduce?
//    2. if not, check s1’s prototype
//    3. if found there, use it

// This is called prototype lookup.

// Example: own property vs prototype method
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.displayInfo = function () {
  return `${this.name} costs $${this.price}`;
};

const p1 = new Product("Keyboard", 49.99);
const p2 = new Product("Mouse", 29.99);

console.log(p1.name); // name is an own property
console.log(p1.displayInfo()); // displayInfo is found on the prototype
console.log(p2.name); // an own property
console.log(p2.displayInfo()); // displayInfo is found on the prototype
