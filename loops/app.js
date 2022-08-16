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

// i = 0, if i is less than 7 then increment 
// by one. console.log text add to the string 
// "#" so it increments each "#" string

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

//exercise 1 (keep printing integers in
// multiples of 3 as long as less than 35)
// let i = 3;
// while (i < 35) {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// exercise 2 (keep printing integers in 
// multiples of 5 as long as less than 100)
// let i = 5;
// while (i < 100) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// //exercise 3 (print integers between 0 and 
// 20, all numbers divisible by 2 should be 
// multipled by 3)
// let i = 0;
// while (i < 20) {
//     if (i % 2) {
//         console.log(i * 3);
//     } else {
//         console.log("");
//         i++;
//     }
// }

// exercise 4 (print prime numbers between 0 
// and 20)
// let i = 2;
// let num = 0;
// let num1 = 0;
// while (i <= 20) {
//     num = i - 1;
//     while ( num > 1) {
//         if (i % num == 0) {
//             num1++
//         }
//         num--
//     }
//     if (num1 == 0) {
//         console.log(i)
//     }
//     num1 = 0;
//     i++ }

// bonus logical question (cookie costs 4 
//dollars, paid with 10 dollars. how many 
//quarters change)

// let dollar = 10
// let quarter = 0
// while (dollar > 4) {
//     console.log(quarter += 4);
//     dollar--
// }

// exercise 6 (write loop for given output:
// 10, 30, 50, 70, 90, 20, 40, 60, 80, 100)
// let i = 10
// while (i <= 100) {
//     console.log(i);
//     if (i )
// }

// exercise 7 (write while loop prints all 
// numbers from 500 - 800 only if divisible
// by 4)
// let i = 500
// while (i < 800) {
//     if (i % 4 == 0) {
//         console.log(i);
//     }
//     i++;
// }








// NESTED LOOPS

/*

output 1:

1
12
123
1234
12345

*/

for (let i = 1; i <= 3; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str);
}

/* 

1. initialize i to 1
2. checks if i (1) is less than or equal to 3
3. initialize the variable str as blank string
4. initialize variable j to 1
5. checks if j (1) is less than or equal to i
6. adds/concatenates 1 as a string to the variable
  str ("1")
7. increment j by 1 (2)
8. checks if j (2) is less than or equal to i (1)
(false)
9. print str variable ("1")
10. increment i by 1 (2)
11. checks if i (2) is less than or equal to 3 (true)
12. initialize the variable str as blank string
13. initialize j to 1
14. check if j (1) is less than or equal to i (2)
(true)
15. concatenates 1 as a string to the variable
str ("1")
16. increment j by 1 (2)
17. checks if j (2) is less than or equal to i (2)
(true)
18. concatenates 2 as a string to the variable str
 ("12")
19. increment j by 1 (3)
20. checks if j (3) is less than or equal to i (2)
(false)
21. print str variable ("12")

so output currently looks like:
1
12 

22. increment i by 1 (3) 
23. checks if i (3) if less than or equal to 3
(true)
24. initialize str variable to empty string
25. initialize j to 1
26. check if j (1) is less than or equal to i (3)
(true)
27. concatenates 1 as a string to the variable str
28. increment j by 1 (2)
29. checks if j (2) is less than / equal to i (3) (true)
30. concatenates 2 as a string to the variable str
31. increment j by 1 (3)
32. checks if j (3) is less than/equal to i (3) (true)
33. concatenates 3 as a string to the variable str
34. increment j by 1 (4)
35. checks if j (4) is less than/equal to i (3) (false)
36. prints str variable ("123")
37. increment i by 1 (4)
38. check if i (4) is less than/equal to 3 (false)
39. breaks out of the loop!

*/