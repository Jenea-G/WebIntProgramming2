function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.describe = function () {
  return `Vehicle brand: ${this.brand}`;
};

// Create a child constructor called Car.

// Each car should have:
//      - brand
//      - model
//      - running

function Car(brand, model, running = false) {
  Vehicle.call(this, brand);
  this.model = model;
  this.running = running;
}

// Inheritance setup
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.start = function () {
  this.running = true;
  return `${this.model} is now running`;
};

Car.prototype.stop = function () {
  this.running = false;
  return `${this.model} has stopped`;
};

Car.prototype.showModel = function () {
  return `Model: ${this.model}`;
};
