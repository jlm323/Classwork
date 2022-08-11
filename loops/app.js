// loops

// for loop structure

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// inside of parentheses, we have 3 statements
// statement 1: declare and initialize a variable, scoped to the for loop
// statement 2: a condition that when true, runs the code in the for loop
// statement 3: incrementing of the variable in order to eventually break the loop

// i = 2
// is i<= 6?
// yes, true. so print i + 1
// if false, stop
// i = i + 2
//  is i <= 6?
// if yes, print i + 2

// step 1: declare and initialize variable
// step 2: check if condition is true
// step 3: console log runs and prints )
// step 4: the variable i increments from 0 to 1
// step 5: repeat step 2, check if condition true
// step 6: repeat step 3, console log runs and prints 1
// step 7: repeast step 4, increments from 1 to 2
// step 8: check if condition true
// step 9: exit loop, continue with rest of code

// keywords you can use, break and continue
// break is another way to break out of or stop the loop
// 









// exercise 1 
// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }

// exercise 2

// for (let i = 1; i <= 10; i = i + 2) {
//    console.log(i)
// }
// for (let i = 2; i <= 10; i = i + 2) {
//     console.log(i)
//  }

// exercise 3
// for (let i = 6; i < 61; i+=3){
//     console.log(i)
// }

// // exercise 4
// let text = "";
// for (let i = 0; i < 7; i++){
//     console.log(text += "#");
// }

//exercise 5


// exercise 6
// for (let i = 1; i <= 20; i++){
//     if (i == 1 || i == 3){
//         console.log(i + ' odd');
//     } else if (i == 2) {
//         console.log(i + ' even');
//     } else {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }



// WHILE LOOPS
// while loop only has the condition
// let i = 1;
// while (i < 10) {
//     console.log(i)
//     i++

//     // break and continue works here too
// }

//exercise 1
// let i = 3;
// while (i < 35) {
//     console.log(i)
//     i = i + 3;
// }

// exercise 2
// let i = 5;
// while (i < 100) {
//     console.log(i)
//     i = i + 5;
// }

//exercise 3
let i = 0;
while (i < 20) {
    if (i % 2) {
        console.log(i * 3);
    } else {
        console.log("");
        i++;
    }
}