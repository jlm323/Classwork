// VARIABLES AND DATATYPES

// A. Q + A

// A 1. We assign a value to a variable using the assignment operator (=)

// A 2. If the variable has been declared with 'let', the variable can be reassigned so it has a new value. 
//e.g. let blue = 42; let blue = 'a color';

// A 3. To assign a variable to an existing variable, we can use the assignment operator to set them equal to one another. 
// e.g. firstVar = 1; secondVar = firstVar;

// A 4. Declare refers to when you are first creating a variable. We can use certain keywords to declare variables like: let, const, and var. Assign refers to giving the variable a value. This is done by using an assignment operator (=) and setting it to a specified value, like this: 
// const versailles = 'France'
// Define refers to the WHOLE process of declaring and assigning.

// A 5. Pseudocoding is an informal way of writing out code so that it is easily understandable and doesn't require following the exact syntax of a language - it is mostly explaining the steps of what the code should do.

// A 5. Around 80-90% of the time should be thinking about how to solve the problem versus actually coding it.


// B. Strings

// B 1. 
// let firstVariable

// B 2. 
// let firstVariable = 'Hello World'

// B 3. 
// firstVariable = 40

// B 4.
// let secondVariable = firstVariable

// B 5. 
// secondVariable = 'Goodbye'

// B 6. 
// console.log(firstVariable) // the value of firstVariable returns the value 40

// B 7. 
// let yourName = "Jessica"
// console.log('Hello, my name is ' + yourName)


// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false == false);
// console.log(e === 'Kevin');
// console.log(a != b || c);
// console.log(a * a === d);
// console.log(48 == '48');


// D. The Farm
// D 1. 
// let animal = 'cow';
// animal = 'chicken';

// // D 2. 
// if (animal === 'cow') {
//     console.log('moooooo');
// } else {
//     console.log("Hey! You're not a cow.");
// }


// E. Driver's Ed
// E 1. 
// let giveKeys =

// E 2.
// function(personAge) {
//     if (personAge > 16) {
//         console.log('Here are the keys!');
//     } else if (personAge < 16) {
//         console.log("Sorry, you're too young.");
//     }
// }
// giveKeys(40);
// giveKeys(12);

// LOOPS

// A. The basics
// A 1.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// };

// A 2. 
// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// };

// A 3. 
// for (let i = 12; i <= 4000; i += 3) {
//     console.log(i);
// };


// B. Get even
// B 1. and B 2.
// for(let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + '<-- is an even number');
//     } else {
//     console.log(i);
//     }
// }


// C. Give me five
// C 1.
// for (let i = 0; i <= 100; i++) {
//     if (i % 5 == 0) {
//         console.log('I found a ' + i + '. High five!');
//     } else if (i % 3 == 0) {
//         console.log('I found a ' + i + '. Three is a crowd');
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log('I found a ' + i + '. Three is a crowd');
//         console.log('I found a ' + i + '. High five!');
//     }
// }

// D. SAVINGS ACCOUNT
// D 1. 
// let bank_account = 0;
// let sum = 0;
// for(let i = 1; i <= 10; i++) {
//     bank_account = sum += i;
// }


// console.log(bank_account)


// ARRAYS AND CONTROL FLOW

// A. Talk about it
// A 1. They are called elements

// A 2. Yes, it is an ordered list. Unless the elements are changed, they will stay the same.

// A 3. A grocery list, favorite things, etc.


// B. Easy does it
// B 1. 
// let quotes = ['to be or not to be', 'go in the direction of your dreams', 'shall I compare thee'];

// C. Accessing elements
// C 1. 
const randomThings = [1, 10, "Hello", true]
// You would reference the index number of the first element which is [0].

// C 2. 
randomThings[2] = "World";

// C 3. 
console.log(randomThings)


// D. Change values
// D 1. 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// to access third element:
ourClass[2];

// D 2. 
ourClass[4] = "Octocat";

// D 3. 
ourClass.push("Cloud City");

console.log(ourClass)

// E. Mix it up
// E 1. 