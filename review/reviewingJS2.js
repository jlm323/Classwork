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

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for (let turtles of ninjaTurtles) {
    console.log(turtles.toUpperCase());
}
