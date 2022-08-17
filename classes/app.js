// CLASSES
// classes are used to create objects
// they're the blueprints used to create objects
// of a certain 'type'

// encapsulation in OOP
// a key principle of OOP, the conept of
// bundling data (properties/attributes)
// instead of writing even more code

// looks similar to a function bc classes are
//special functions

// class Vehicle {

// }

// instance: an object created by a class
// instantiate: we instantiate a class to create an object
// instatiation: the process of creating an object

// we use the 'new' keyword when invoking (instantiating) the class

// const v1 = new Vehicle()
// const toyota = new Vehicle()

// v1 is the instance
// the whole line is instantiating
// toyota would be a NEW instance of the Vehicle class

// when a class is being instantiated, the special 'constructor' method in the class will automatically be called

// class Vehicle {
//     constructor(vin, make, model) {
//         this.vin = vin;
//         this.make = make;
//         this.model = model;
//         this.running = false;
//         console.log('creating a new instance of Vehicle');
//     }

//     goVroom() {
//         console.log('vroom!');
//     }

//     start() {
//         this.running = true;
//         console.log('running');
//     }

//     stop() {
//         this.running = false;
//         console.log('stopped')
//     }
//     toString() {
//         return 'Vehicle {' + this.vin +'} is a ' + this.make + ' model ' + this.model;
//     }
// }

// const hyundai = new Vehicle('444', 'SUV', 'T8')
// const toyota = new Vehicle()

// // hyundai.start()
// hyundai.stop()


// 'this' keyword is referring to the current instance of the class
// this.constructor, it's ref the property

// console.log(hyundai, toyota)

// output: 
// Vehicle { vin: '444', make: 'SUV' } Vehicle { vin:undefined, make: undefined }


// Defining methods in a class
// prototype (instance) methods
// static (class) methods

// prototype methods are the most common and are available to be called by any instance of the class
// e.g. when you use forEach on array, you can only use that method on an instance of Array like: 
// let arr = [1, 2, 3]
//         // arr.forEach()

// let arr2 = new Array(1, 2, 3)
// console.log(arr2)

// arr2.forEach((x) => console.log(x))


// static methods are methods that are called on the class itself and cannot be called by instance.
// e.g. when you use Math.random you don't need to create an instance of Math first

// console.log(Math.random())


// overriding methods
// inheritance (OOP principle) subclasses inherit methods from their parent classes

// console.log(hyundai.toString())





// EXERCISE 
// class Cat {
//     constructor(age, fur, paws) {
//         this.age = age;
//         this.fur = fur;
//         this.paws = paws;
//     }
//     scratch() {
//         console.log('scratch');
//     }   
//     meow() {
//         console.log('meow');
//     }
//     knockOver() {
//         console.log('knock over glass');
//     }
    
// }

// const tabby = new Cat('4', 'orange', 'beans')
// const ragdoll = new Cat('2', 'gray and white', 'pinto beans')

// console.log(tabby, ragdoll)
// tabby.scratch()
// tabby.meow()
// tabby.knockOver()

// ragdoll.scratch()
// ragdoll.meow()
// ragdoll.knockOver()





// EXERCISE 2
// class Pirate {
//     constructor(pirateName, treasure, ocean) {
//         this.pirateName = pirateName;
//         this.treasure = treasure;
//         this.ocean = ocean;
//     }
//     matey() {
//         console.log('Arr matey');
//     }
//     swab() {
//         console.log('swab the deck');
//     }
//     plank() {
//         console.log('walk the plank');
//     }
// }



// const jollyRoger = [new Pirate('Blackbeard','gold', 'Atlantic'), new Pirate('Bootstrap Bill', 'sapphires', 'Atlantic'), new Pirate('Jack Sparrow', 'rubies', 'Carribean')]
// const blackPearl = [new Pirate('Redbeard', 'emeralds', 'Pacific'), new Pirate('Goob', 'diamonds', 'Carribean'), new Pirate('Crossblades', 'lapis lazuli', 'Indian')]

// console.log(jollyRoger, blackPearl)

// jollyRoger.forEach((x) => console.log(x))
// blackPearl.forEach((x) => console.log(x))


// // EXTRA EXERCISE
// class Cars {
//     constructor(numer) {
//         this.number = number
//     }
// }

// const freighter = []
// for (let i = 0)


// make a class inherit attributes from a 'parent class'
// class Character {
//     constructor(name, age, hair) {
//         this.name = name;
//         this.age = age;
//         this.hair = hair;
//     }
//     greet(otherCharacter) {
//         console.log('Greetings!');
//     }
//     smite() {
//         console.log('Stinger');
//     }
// }
// child class/sub class will inherit all from parent
// class Hobbit extends Character {
//     constructor(name, age, eyes, hair) {
//         super(name, age, eyes, hair);
//         console.log('inside of Hobbit constructor');
//     }
//     static steal() {
//         console.log('Arkenstone');
//     }
//     greet(name){
//         console.log('Hello ' + name); // override prev functionality
//         super.smite(); // reference parent class method
//     }
// }

// const frodo = new Hobbit('Frodo', 20, 'blue', 'brown')
// console.log(frodo)
// frodo.greet('Sam')
// frodo.steal()

// Hobbit.steal()


// LAB EXERCISE 1

// class Governor {
//     static staticParty = 'Democrat';
//     static staticPolicy = 'Education';
//     static staticState = 'PA';
//     static passBill() {
//         console.log('Passing a bill');
//     }
//     static meeting() {
//         console.log('Meeting at state capital')
//     }
// }
// console.log(Governor.staticParty)
// console.log(Governor.staticPolicy)
// console.log(Governor.staticState)
// Governor.passBill()
// Governor.meeting()


// LAB EXERCISE 2
// class Person {
//     constructor(name, area, abode) {
//         this.name = name;
//         this.area = area;
//         this.abode = abode;
//     }
//     greet() {
//         console.log('Hello!');
//     }
//     food() {
//         console.log('Eat lunch');
//     }
//     sleep() {
//         console.log('Bedtime');
//     }
// }

// class PostalWorker extends Person {
//     sorting() {
//         console.log('Sorting mail');
//     }
//     deliver() {
//         console.log('Deliver mail');
//     }
//     drive() {
//         console.log('Drive delivery route');
//     }
// }

// class Chef extends Person {
//     chop() {
//         console.log('Chop veggies');
//     }
//     bake() {
//         console.log('Bake bread');
//     }
//     fry() {
//         console.log('Stirfry')
//     }
// }

// const postal = [new PostalWorker('Bobby', 'Suburban', 'House'), new PostalWorker('Jodie', 'Rural', 'House')]

// const chefs = [new Chef('Gordon', 'Urban', 'Apartment'), new Chef('Rachel', 'Suburban', 'House')]

// console.log(postal[0])
// console.log(postal[1])
// console.log(chefs[0])
// console.log(chefs[1])

// postal[0].sorting()
// postal[1].deliver()
// postal[1].drive()

// chefs[0].chop()
// chefs[1].bake()
// chefs[0].fry()


// LAB EXERCISE 3

class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(num) {
        console.log('Deposited ' + num);
    }
    withdraw(num) {
        if (num < this.balance) {
            this.balance -= num;
            console.log('withdrew ' + num);
        } else {
            console.log('Not enough funds');
        }
        
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum, overdraftEnabled);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(overdraftEnabled) {
        if (overdraftEnabled) {
            console.log('Overdraft enabled');
        } else {
            console.log('Cannot finish request');
        }
        
    }
}

class SavingsAccount extends BankAccount {
    withdraw() {
        console.log('Cannot complete request');
    }
}

const member1Bank = new BankAccount('Roger', 100, '0071 503')
const member1Checking = new CheckingAccount('Roger', 100, '0071 503',)
const member1Savings = new SavingsAccount('Roger', 600, '0071 502')
member1Checking.deposit(400)
member1Checking.withdraw(5000)
member1Bank.withdraw(45)
member1Savings.withdraw(1000)