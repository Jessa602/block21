class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return this.year + " " + this.make + " " + this.model;
  }
}
{
  class ElectricCar extends Car {
    constructor(make, model, year, range) {
      super(make, model, year);
      this.range = range;
    }

    getDescription() {
      return this.make + " " + this.model + " " + this.year + " " + this.range;
    }
    getRange() {
      return this.make + " " + this.model + " " + this.year + " " + this.range;
    }
  }
  let eCar1 = new ElectricCar("Tesla", "Model 3", 2019, 300);
}
