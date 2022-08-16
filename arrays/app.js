// let learner = 'Sami'
// let learner2 = 'Chris'
// let learner3 = 'Stephine'


// ARRAYS
// data type. you can put other than strings, like
// numbers, boolean, another array

// indexes:      0         1           2        3
// let learners = ['Sami', 'Chris', 'Stephine', [2, 4, 6]]

// to get specific value/element, we grab the 
// element index. it always starts at 0

// learners[0] // would be grabbing 'Sami'

// console.log(learners)
// console.log(learners[0])
// console.log(learners[1])
// console.log(learners[2])

// to change/reassign the value
// learners[0] = 4
// console.log(learners)

// if trying to access a value that is not in the
// array, then it returns undefined

// you can access the length of the array
// console.log(learners.length)

// to target a value within an array, inside of an
// array:
// console.log(learners[3][0])

// PUSH method
// add a value to end of array
// learners.push('blue')
// console.log(learners)

// POP method
// remove a value at the end of array
// learners.pop()
// console.log(learners)

// SHIFT method
// removes the first element of array
// and returns it
// learners.shift()

// UNSHIFT method
// inserts new element at start of array
// and returns it
// learners.unshift('Usman')
// console.log(learners)



// let learners = ['Kristy', 'Nathan', 'Ronald']
// let learner2 = ['Jade', 'Rixio', 'Teo']

// // spread operators ( used in array)
// let everybody = [...learners, ...learner2]
// console.log(everybody)

// // rest parameters ( used in a function under the parameter)
// function add(...numbers) {
//     // numbers becomes every value we passed with add()
//     // console.log(numbers)
//     for (let i = 0; i < numbers.length; i++) {

//     }
// }

// add(4, 5, 6, 10)

// first index always 0
// last index is length of array minus 1

// use i in for loops because going through
// the index in array




// EXERCISE 1

// function declaration for maxOfTwoNumbers
// takes two number arguments and returns largest of them
// if same, return that number

// function maxOfTwoNumbers(num1, num2) {
//     if (num1 >= num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(maxOfTwoNumbers(2, 3))




// EXERCISE 2

// function expression for maxOfThree
// takes 3 number arguments, returns largest

// const maxOfThree = function(num1, num2, num3){
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else if (num3 >= num1 && num3 >= num2){
//         return num3;
//     }
// }

// console.log(maxOfThree(2, 4, 6));




// EXERCISE 3

// function declaration for isCharAVowel
// takes a character as an argument
// returns true if vowel, false otherwise

// function isCharAVowel(string){
//     if (string == 'A' || string == 'E' || string == 'I' || string == 'O' || string == 'U') {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isCharAVowel('T'))




// // EXERCISE 4

// function expression for sumArray
// takes array of numbers and returns the sum

// const sumArray = function(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i];
//             }
//             return sum;
// }
// console.log(sumArray([2, 4, 5]));





// EXERCISE 5

// function declaration for multiplyArray
// array of numbers as argument
// returns the product of those numbers

// function multiplyArray(array) {
//     let product = 1;
//     for (let i = 0; i < array.length; i++){
//         product *= array[i];
//     } return product;
// }
// console.log(multiplyArray([2, 4, 5]));




// EXERCISE 6 
// function expression for numArgs
// return number of arguments passed to function

// const numArgs = function(...arguments) {
//     return arguments.length;
// }
// console.log(numArgs(2, 2, 3))



// EXERCISE 7
// function reverseString(string) {
//     let words = [...string];
    
// }

 
// EXERCISE 8
// const longestStringInArray = function() {
//     let
// }




// EXERCISE 9





// STRINGS

// let firstName = 'bobby';

// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName.charAt(i).toUpperCase());
// }

// let firstName = 'Bobby. Went. To. The. Mall.';
// let arrOfStrs = firstName.split('.') // string method
// console.log(arrOfStrs);
// let joinedStr = arrOfStrs.join('.') // array method
// for (let i = 0; i < firstName.length; i++){
//     console.log(firstName.split(' '));
// }

// let arr = [3, 10, 15]

// // for (let num of arr) {
// //     console.log(num);
// // }

// // let str = 'bobby'

// // for (let character of str) {
// //     console.log(character);
// // }

// // array method: .splice()  - accepts unlimited arguments
// // changes the array
// // .splice(start, delete count, items)

// arr.splice(0, 1) // output: [10, 15]
// console.log(arr)

// let fruit = ['apple', 'pear', 'banana', 'kiwi']
// // fruit.splice(0, 3);
// // fruit.splice(1, 0, 'blueberry');
// console.log('fruit: ', fruit);



// // array method: .slice()
// let fruit2 = fruit.slice(0, 2);
// console.log('fruit2: ', fruit2)




// let foods = ['kimchi', 'tacos', 'arepa', 'spam']

// for loops
// for (let i = 0; i < good.length; i++)

// while loops
// while (i < food.length)

// for of
// for (let item of foods)

// forEach (built-in array method) when you want to iterate over all of the elements in an array

// foods.forEach(function(foodItem) {
//     console.log(foodItem);
// })

// foods.forEach(function(item, idx, arr) {
//     console.log(item);
//     console.log(idx);
//     console.log(arr);
// })


// anonymous function
// () =>
// function(){ }

// callback functions: passing function as an argument

// const myForEachFunction = function() {

// }

// filter (built-in array method)

// let newFoodsArray = foods.filter((item, idx) => {
//     // if you return true, keep the item
//     // if you return false, discard it
//     if (item[0] === 'k' || item[2] === 'a') {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(newFoodsArray)

// map (built-in array method)
// let brandNewArray = foods.map(function(item, idx) {
//     // change the current item
//     return item + '!';
// })
// console.log(brandNewArray)

// reduce (built-in array method)

// let nums = [4, 10, 25, 30, 100]
// let result = nums.reduce((previousValue, currentValue) => {
//     return currentValue + previousValue;
// }, 0)
// console.log(result);



// USE ARGUMENTS AND PARAMETERS for functions:
// EXERCISE 1
// print numbers 1 to 100. 
// print fizz for numbers divisible by 3
// print buzz for numbers divisble by 5
// print fizzbuzz for numbers divisible by 3 & 5
// let numDiv = function() {
//     for (let i = 0; i <= 100; i++) { // while (num1 <= num2)
//          if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// } 
// console.log(numDiv()) // console.log(numDiv(1,100))



// EXERCISE 2
// nando bought a $4 cookie. paid with $10.
// machine paid him back in quarters
// how many quarters he got in return?

// let changeCoin = function(cost, bills) {
//     let quarters = 0;
//     while (cost < bills) {
//         quarters += 4;
//         bills--;
//     } return quarters;
//     }
//     console.log(changeCoin(4, 10))


// EXERCISE 3
// nando bought a shirt for $27.83
// paid with $100
// how many bills he received in as large denom. as poss.
// function change(paid, cost) {
//     paid *= 100;
//     cost *= 100;
//     let changeReturn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//     while (paid > cost) {
//         if (paid >= cost + 5000) {
//             paid -= 5000; // 50 dollars converted to change
//             changeReturn[0] ++;
//         } else if (paid >= cost + 2000) {
//             paid -= 2000;
//             changeReturn[1] ++;
//         } else if (paid >= cost + 1000) {
//             paid -= 1000;
//             changeReturn[2] ++;
//         } else if (paid >= cost + 500) {
//             paid -= 500;
//             changeReturn[3] ++;
//         } else if (paid >= cost + 100) {
//             paid -= 100;
//             changeReturn[4] ++;
//         } else if (paid >= cost + 25) {
//             paid -= 25;
//             changeReturn[5] ++;
//         } else if (paid >= cost + 10) {
//             paid -= 10;
//             changeReturn[6] ++;
//         } else if (paid >= cost + 5) {
//             paid -= 5;
//             changeReturn[7] ++;
//         } else if (paid >= cost + 1) {
//             paid--;
//             changeReturn[8] ++;
//         }
//     } return 'Change returned: ' + 'fifty dollar bills: ' + changeReturn[0] + ', twenty dollar bills: ' + changeReturn[1] + ', ten dollar bills: ' + changeReturn[2] + ', five dollar bills: ' + changeReturn[3] + ', one dollar bills: ' + changeReturn[4] + ', quarters: ' + changeReturn[5] + ', dimes: ' + changeReturn[6] + ', nickels: ' + changeReturn[7] + ', pennies: ' + changeReturn[8];
// }
// console.log(change(100, 27.83))