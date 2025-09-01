class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  start() {
    console.log("Car is now running");
  }

  stop() {
    console.log("Car stopped");
  }

  printDetails() {
    console.log(
      `Car one Name is ${this.name} and Model is ${this.model} and Price is ${this.price}`
    );
  }
}

let car1 = new Car("MG", "2022", "420000");
let car2 = new Car("Hyundai", "2024", "499010");

car2.printDetails();
car2.start();
