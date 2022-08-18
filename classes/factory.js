class Car {
    constructor(company) {
        this.company = company;
        this.cars = [];
    }
    generateCar() {
        const newCar = new Car (this.company, this.cars.length);
        this.cars.push(newCar);
        return this;
    }
    findCar(index) {
        return this.cars[index];
    }
}

// only need one instance (Singleton)
const tesla = new Car('Tesla')

for (let i = 0; i < 100; i++) {
    tesla.generateCar()
}
console.log(tesla)