
// bad-ish (hoisting)
// var age;

// good
// let age;

// constant
// const age = 8;

// data types
// number, integer or decimal
// const age2 = 18;

// string
/* const name = "jess"
const name2 = 'jess'
const name3 = `jess`
const name4 = "she said, 'no'" */

// boolean (true false yes no)
//const employed = true;

// undefined (expecting a value but don't have one yet)
// const example = undefined;

// null (explicitly give something no value)
// const example2 = null;

// operators:
/*
assignment: =
arithmetic: + - / ^
bitwise
logical: AND, OR, and NOT
string
comparison
*/
//string
//let firstName = "bob"
//let lastName = "the builder"

// concatenation: combine strings
//let fullName = firstName + lastName
//let concatenation = "con" + "cat" + "enation"

// camel case : myFavSong
// pascel case: MyFavSong
// kebab case: my-fav-song

// logical operators
// AND   &&
// OR    ||
// NOT   !

// shorthands
// let fire = 0;
// fire = fire + 1
// fire +- 1 

// fire -= 10 // without shorthand:
// fire = fire - 10

// only for incrementing or decrementing
// fire-- // decrementing by 1 (fire = fire - 1)
// fire++ // incrementing by 1 (fire = fire + 1)

// fire = fire - 10


// loose comparison (uses type coercion)
// == (2 equal signs)
// eg. 1 == 1 (true) 1 == '1' (true) 1 == one (false)

// strict comparison
// === (3 equal signs)
//eg. 1 === 1 (true) 1 === '1' (false)

// assignment operator
// = (1 equal sign)

/* let x = 6;
let y = 3; */
// console.log(x < 10 && y > 1)

// x < 10   true, x is less than 10
// y > 1    true, y is greater than 1
// so (x < 10 && y > 1) will return true

// console.log(x == 5 || y == 5)

// x == 5 OR y == 5 false

// console.log(!(x==y)) // true


// EXERCISE 1
// let cat = 1
// let dog = 2
// let catdog = cat + dog
// console.log(catdog) = 3

// EXERCISE 2 
// let fish = 3
// let bird = 4
 
 // console.log(catdog + bird - fish) = 4


// EXERCISE 3
 /* let red = 1
 let blue = 2
 let green = 3
 let purple = 4
 let yellow = 5
 let orange = 6
 let indigo = 7
 let black = 8
 let white = 9
 let gray = 10 */
 
//firstFive = red + blue + green + purple + yellow 
// firstFive / 5
// console.log(firstFive / 5)       = 3

//secondFive = orange + indigo + black + white + gray
// secondFive / 5
// console.log(secondFive / 5)      = 8

//allTen = firstFive + secondFive
// allTen / 2
// console.log(allTen / 2)          = 27.5

//EXERCISE 4
//set1 = (4 + 10 + 22 + -30 + 55)/5
// console.log(set1)    = 12.2
//set2 = (68 + 7 + -22 + 9 + 100)/5
// console.log(set2)    = 32.4
//setsAverage = (set1 + set2)/2
// console.log(setsAverage)  = 22.29

// EXERCISE 5 (extra)
//let box1 = "pop"
//let box2 = "corn"
//let box3

//box3 = box1 // box3 is "pop" box1 is "pop"
//box1 = box2 // box1 is "corn" box2 is "corn"
//box2 = box3 // box2 is "pop" box3 is "pop

// console.log(box1, box2)        returns corn pop

// let x;
//if (1 > 1) {
 //   console.log('true')
//}

//let num = 1
//if (num > 0) {
  //  console.log(num)
//} else ()

//if (age => 18){
  //  console.log("welcome to this site!")
//}
//else {
   // console.log(access denied)
//}

//let num = 9; 
//if (num % === %% num > 100){
  //  console.log('positive and  greater than 100')
//} else if (num % 2 === 0 &&& num < 100) {
  //  console.log()
//} else 

//let grade = 67;
//if (grade >= 55) {
  //  if (grade >= 90) {
    //    console.log('A');
    //}
    //else if (grade >= 80){
      //  console.log('B');
    //}
    //else if (grade >= 70){
      //  console.log('C');
    //}
    //else {
      //  console.log('D');
    //}
//} else {
  //  console.log('F');
//}





// SWITCH
// when to use switch: when you have many conditions and cannot use if statements for them
/*
let number = 3;

switch (number) {
  case 1: 
    console.log('inside of case 1')
    break;
  case 2: 
    console.log('inside of case 2')
    break;
  case 3:
    console.log('inside of case 3')
    break;
  default:
    console.log('do something else')
    break;
}
*/
// can also stack statements
/* 
case 1:
case 2:
case 3:
  console.log('number is between 1 and 3)
  break;
*/

// when switch hits break,
// it jumps OUT of the switch statement






// TERNARY OPERATOR (three parts)

//let lighting = 'dark'

//let dayOrNight = lighting === 'dark' ? 'nighttime' : 'daytime'

// is lighting equal to dark? if so, return nighttime. ELSE return daytime


// EXERCISE 1 SWITCH STATEMENTS

let letter = 'A'
switch (letter) {
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log('vowel')
    break;
  default:
    console.log('consonant')
    break;
}

// EXERCISE 2 TERNARY OPERATORS

// let number = -89
// let numberStatus = number > 0 ? 'positive number' : 'negative number'
// console.log(numberStatus);

let number = 0
let numberStatus = number > 0 ? 'positive number' : number < 0 ? 'negative number' : 'number is zero'
console.log(numberStatus);