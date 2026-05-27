// Parent class
class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `This animal is named ${this.name}.`;
  }
}

// Child class
class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name} barks`;
  }
}

const dog2 = new DogClass("Max", "Beagle");
console.log(dog2.describe());
console.log(dog2.bark());

// extends - sets up inheritance
// super(name) calls the parent constructor

// === Part 7 ===
class VehicleClass {
  constructor(brand) {
    this.brand = brand;
  }

  describe() {
    return `The brand of this vehicle is ${this.brand}.`;
  }
}

class CarClass extends VehicleClass {
  constructor(brand, model, running = false) {
    super(brand);
    this.model = model;
    this.running = running;
  }

  start() {
    this.running = true;
    return `${this.brand} ${this.model} is now running`;
  }
}

const car1 = new CarClass("Ford", "Mustang");
console.log(car1.describe());
console.log(car1.start());
