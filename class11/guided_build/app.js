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

// Display results in the page
const runDemoBtn = document.getElementById("run-demo-btn");
const output = document.getElementById("output");

runDemoBtn.addEventListener("click", () => {
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic", true);

  output.innerHTML = `
    <p>${car1.describe()}</p>
    <p>${car1.showModel()}</p>
    <p>${car1.start()}</p>
    <hr>
    <p>${car3.describe()}</p>
    <p>${car3.showModel()}</p>
    <p>${car3.start()}</p>
    <p>${car3.charge()}</p>
  `;
});

// PART 5 - Independent tasks
// ===== task 2 ====
function ElectricCar(brand, model, batteryLevel) {
  Car.call(this, brand, model);
  this.batteryLevel = batteryLevel;
}

// Inheritance setup
ElectricCar.prototype = Object.create(Vehicle.prototype);
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar; // ===== what does this line do ? ========= ???

ElectricCar.prototype.charge = function () {
  this.batteryLevel = 100;
  return `${this.model} is fully charged`;
};

const car3 = new ElectricCar("Ford", "Mustang Mach-E", 20);
