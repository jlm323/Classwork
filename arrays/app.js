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

// function maxOfTwoNumbers(num1, num2) {
//     if (num1 >= num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }
// console.log(maxOfTwoNumbers(2, 3))

// EXERCISE 2

// function maxOfThree(num1, num2, num3){
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else if (num3 >= num1 && num3 >= num2){
//         return num3;
//     }
// }

// console.log(maxOfThree(2, 4, 6))

// EXERCISE 3
function isCharAVowel(string){
    if (string == 'A' || string == 'E' || string == 'I' || string == 'O' || string == 'U') {
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel('T'))