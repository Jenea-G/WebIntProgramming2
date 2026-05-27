function Dog1(name) {
  this.name = name;
}

Dog1.prototype.speak = function () {
  return `${this.name} says woof`;
};

function Cat1(name) {
  this.name = name;
}

Cat1.prototype.speak = function () {
  return `${this.name} says meow`;
};

// This works, but there is duplication:

//      - both have name
//      - both are conceptually animals

// A better design is to create an Animal parent.
function Animal(name) {
  this.name = name;
}

Animal.prototype.describe = function () {
  return `This animal is named ${this.name}`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
// Animal.call(this, name)?
//      - runs the parent constructor in the context of the new Dog object.
//      That means Dog gets the parent’s own properties, such as name.

// === Connect the prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Now Dog objects can use methods from Animal.prototype.

// === Add child specific method
Dog.prototype.bark = function () {
  return `${this.name} barks loudly`;
};

// === test
const dog1 = new Dog("Buddy", "Golden Retriever");

console.log(dog1.describe()); // is inherited from Animal.prototype
console.log(dog1.bark()); // belongs to Dog.prototype

// THE LOOKUP CHAIN:

// When you write:
dog1.describe();
// JavaScript checks:

//      1. does dog1 itself have describe?
//      2. if not, does Dog.prototype have it?
//      3. if not, does Animal.prototype have it?

// Since Animal.prototype has it, JavaScript uses that method.
// That is inheritance through the prototype chain.

// PART 5 - Independent tasks
// ===== task 1 ====

function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  return `${this.name} meows`;
};

const cat1 = new Cat("Kitty", "Chat de goutiere", "Tabby");
console.log(cat1.describe());
console.log(cat1.meow());
