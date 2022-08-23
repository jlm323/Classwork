// array methods take a callback function as an argument
// callbacks are functions that will run at a later time

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// every method
// tests whether all elements in the array pass the test implemented by the provided function. it returns a boolean value.
let test = nums.every(myCallback)

// creating our callback function
function myCallback(element) {
    if (element >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Result of our every array method check is...', test)

let testWords = panagram.every(wordsCallback)

function wordsCallback(element) {
    if (element.length < 8) {
        return true;
    } else {
        return false;
    }
}

// let testWords = panagram.every((element) => element.length < 8)

console.log('Result of our every array method check is...', testWords)


// filter method 
// creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function

let numsTest = nums.filter((element) => element < 4)
console.log(numsTest)

let wordTest = panagram.filter((element) => element.length % 2 === 0)
console.log(wordTest)

// find method
// returns the first elelment in the provided array that satisfies the provided testing function. if no values satisfy the testing function, undefined is returned.
let findNums = nums.find((element) => element % 5 === 0)
console.log(findNums)

let findWords = panagram.find((element) => element.length > 5)
console.log(findWords)

// find index method
//returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
let numIndex = nums.findIndex((element) => element % 3 === 0)
console.log(numIndex)

let wordIndex = panagram.findIndex((element) => element.length < 2)
console.log(wordIndex)

// for each method
// executes a provided function once for each array element
// there is no return value for forEach, it will just automatically return undefined
nums.forEach((element) => console.log(element * 3))

panagram.forEach((element) => console.log(element + '!'))

// map method
// creates a new array populated with the results of calling a provided function on every element in the calling array
let newNums = nums.map((element) => element * 100)
console.log(newNums)

let newWords = panagram.map((element) => element.toUpperCase())
console.log(newWords)

console.log(nums)
console.log(panagram) // original arrays have stayed the same

// some method
// tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array

let divNum = nums.some((element) => element % 7 === 0)
console.log(divNum)

let letterWord = panagram.some((element) => element.indexOf('a'))
console.log(letterWord)