// hero.moveRight() 
// a function is a reusable block of code designed to perform a single purpose
// it opptionally takes in data as input and returns a single piece of data (including complex data such as objects, functions, etc)
// e.g. input into function = function(input)
// built-in functions: console.log()

// why use functions?
// tackle complexity and break things into smaller bits
// DRY: Don't Repeat Yourself
// functions provide code reuse so you don't have to repeat yourself over and over, functions can be called again
// function naming also helps with documentation and debugging

// DEFINING AND CALLING FUNCTIONS

// function declaration / definition (give it a name after the function keyword)
// function sayHello() {
//     return 'hello'
// }
//curly brackets: the scope of the function. cannot access things IN the scope outside of the function

//function expression (take nameless function and assign it to a variable)
// const sayHi = function(name) {
//     return 'Hi'
// }

// function expressions cannot be invoked before they're defined. function declarations are hoisted to the top of their scope and can be invoked even if they're defined later in source code

// arrow function (it is more concise syntax, offer implicit return of a single expression)
// const sayHey = () => 'Hey';

// the equivalent of the function declaration:
// function sayHey() {
//     return 'Hey';
// }

// call function 
// sayHello() // developers might say call, execute, invoke or run a function - all means the same thing

// parameters/arguments
// function add() {        // () list of parameters
    // return 2 + 3       // returns the sum, 5
// }

// console.log(add())      // () list of arguments
// shows us the sum, 5, in the terminal

// parameters are the 'slots' or placeholders for inputs that the function should receive
// arguments are the specific values of JS data types that we give those slots when we run a function

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(2, 2))
// console.log(add(5, 5))
// console.log(add(10, 1))

// console.log(add('Bob', ' the Builder'))

// important to name parameters using identifiers that convey the data they will hold (so the strings 'Bob' and 'the Builder' wouldn't be good practice here)

// it's ok if you have more arguments than parameters defined. if fewer arguments are passed than parameters defined, then the parameter variables without a matching argument would be set to 'undefined'

// you can change what it defaults to instead of 'undefined'
// function add(num1, num2, num3 = 0, num4 = 0)
// when console.log'd it would show 0 instead of 'undefined' if there are less arguments than parameters









// EXERCISE 1

// function computeArea(width, height) {
    
//     return 'The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + (width * height) + ' square units.'
// }

// console.log(computeArea(2, 2))


// EXERCISE 2 

// function planetHasWater(planet) {
//     if (planet == 'Earth' || planet == 'Mars') {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }

// console.log(planetHasWater('Mars'))
// console.log(planetHasWater('Jupiter'))



// bonus, using arrow function instead
// exercise1

// const computeArea = (width, height) =>  'The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + (width * height) + ' square units.'

// console.log(computeArea(2, 2))

// exercise2

const planetHasWater = (planet) => {if (planet == 'Earth' || planet == 'Mars') {
    return 'true';
} else {
    return 'false';
}}

console.log(planetHasWater('Mars'))