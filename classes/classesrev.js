// class Hamster {
//     constructor(name) {
//         this.owner = '';
//         this.name = name;
//         this.price = 15;
//     }
//     wheelRun() {
//         console.log('squeak squeak');
//     }
//     eatFood() {
//         console.log('nibble nibble');
//     }
//     getPrice() {
//         return this.price;
//     }
// }
// const newHamster = new Hamster('Bob')

// class Person {
//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hamsters = [];
//         this.bankAccount = 0;
//     }
//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;
//     }
//     getWeight() {
//         return this.weight;
//     }
//     greet() {
//         console.log('Hello ' + this.name);
//     }
//     eat() {
//         this.weight++;
//         this.mood++;
//     }
//     exercise() {
//         this.weight--;
//     }
//     ageUp() {
//         this.age++;
//         this.height++;
//         this.weight++;
//         this.mood--;
//         this.bankAccount += 10;
//     }
//     buyHamster(newHamster) {
//         this.hamsters.push(newHamster);
//         this.mood + 10;
//         this.bankAccount -= newHamster.getPrice(newHamster);
//     }
// }


// const timmy = new Person ('Timmy')

// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();

// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();
// timmy.eat();

// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();
// timmy.exercise();

// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();
// timmy.ageUp();

// //or
// // for (let i = 0; i < 14; i++){
//     //timmy.ageUp()
// //}


// const newHamster1 = new Hamster('Gus')

// newHamster1.owner = 'Timmy'

// timmy.buyHamster(newHamster1);

// for (let i = 0; i < 15; i++) {
//     timmy.ageUp()
// }
// // age 29

// timmy.eat();
// timmy.eat();

// timmy.exercise();
// timmy.exercise();
// console.log(timmy)

// const newPerson = new Person ('Gaia');
// console.log(newPerson);
// newPerson.buyHamster(newHamster);



// Chef Make Dinners

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    createDinner(appetizer, entree, dessert) {
        const newDinner = new Dinner(appetizer, entree, dessert);
        return newDinner;
    }
}

const chef1 = new Chef();

console.log(chef1.createDinner('soup', 'steak', 'creme brulee'));
console.log(chef1.createDinner('salad', 'pasta', 'brownie'));
console.log(chef1.createDinner('nachos', 'BLT', 'ice cream'))