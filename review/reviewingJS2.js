// PART II. JAVASCRIPT REPS

// Easy going

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }



// Get Even

// for(let i = 0; i <= 200; i+=2) {
//     console.log(i);
// }



// Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('Fizz Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }



// Wild Wild Life

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ['Sharky', 'shark', 20, 'Left Coast']
// const plantee = ['Plantee', 'plant', 5000, 'Mordor']
// const porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]++;
// console.log(plantee);   // one year older

// wolfy[3] = 'Gotham City';
// console.log(wolfy);     // change hometown

// dart.push("Hawkins");
// console.log(dart);

// wolfy.shift();
// wolfy.unshift('Gameboy');
// console.log(wolfy);



// Yell at the Ninja Turtles

// const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let turtles of ninjaTurtles) {
//     console.log(turtles.toUpperCase());
// }



// Methods, revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

// find index of Titanic
// let findTitanic = i => i === 'Titanic';
// console.log(favMovies.findIndex(findTitanic));

// favMovies.sort();
// console.log(favMovies);     // sorts strings into alphabetical order

// favMovies.pop();
// favMovies.push('Guardians of the Galaxy');

// favMovies.reverse();

// favMovies.shift();

// favMovies.unshift('Princess and the Pauper'); // doesn't return anything unless something is in the parentheses

// let findDjango = i => i === 'Django Unchained';
// console.log(favMovies.findIndex(findDjango));   // index is 15

// favMovies.splice(15, 1, 'Avatar');

// console.log(favMovies.length); // output: 19

// console.log(favMovies.slice(10));

// let findFast = i => i === 'Fast and Furious';
// console.log(favMovies.findIndex(findFast)); 
// output is -1 because it is not in the array

// if you want the array to be mutated, declare it with const. if you want the array to get reassigned, declare it with let.



// Where is Waldo

const whereIsWaldo = [['Timmy', 'Frank'], 'Eggbert', ['Lucinda', 'Jacc', 'Neff', 'Snoop'], ['Petunia', ['Baked Goods', 'Waldo']]];

whereIsWaldo.splice(1, 1);

whereIsWaldo[1][2] = 'No One';

console.log(whereIsWaldo[2][1][1]);