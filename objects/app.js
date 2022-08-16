// OBJECTS
// most common data structure in 
// Object Oriented Programming (OOP)
// objects are a collection of zero or more properties
// property consists of a key: a value pair where:
// the key is a string and
// the value is any JS expression including other objects

// difference bw arrays and objects
// arrays are a data structure and use to organize data
// in sequential lists, but don't know what it means
// objects also store data, but more specifically

//          0          1        2
// let arr = ['kiwi', 'banana', 'apple']

// object literal
// let obj = {}

// a key is like an index in an array
// but it has a name and it is unique
// a value is what a key refers to and can be
// any datatype

// store key-value pairs inside an object
// let cat = {
//     name: 'Mr. Bean',
//     fur: 'grey, black, and white',
//     legs: 4
// }

// console.log(cat)

// // access a property with dot notation
// console.log(cat.name)

// // we can also access properties with brackets
// console.log(cat['name'])
// console.log(cat['fur'])
// console.log(cat['legs'])

// // can also use square brackets when don't know 
// // property name
// let propName = 'fur'
// console.log(cat['propName'])

// add object properties
// console.log(cat)

// cat.breed = 'calico'

// console.log(cat)

// cat.temperament = 'mild'

// console.log(cat)

// // change object properties
// cat.temperament = 'angry'

// console.log(cat)

// can use an array to add more than one
// value to a property

// cat.temperament = ['mild']
// cat.temperament.push('angry')

// why we use an object instead of an array
// if the thing you want to model is a list
// use an array
// if the thing you want to model has properties
// use an object

// let cat = {
//     name: 'Mr. Bean',
//     legs: 4,
//     age: 3,
//     favortiteThings: ['yarn', 'string', 'food'],
//     canSpeakFrench: false,
//     meow: function() {      // known as a method
//         console.log('meow');
//     },
//     purr: () => {
//         console.log('purr');
//     },
//     talk(speech) {          // parameter
//         console.log(speech);
//     }
// }

    // method is a property w. a function as the value

// access property with an array
// console.log(cat.favortiteThings[2]) // output: 'food'

// can change properties of object
// but cannot reassign an object that 
// has been declared with const

// object cannot have more than one key
// with the same name
// if it does, it the value will default
// to the last key w. the same name

// use object properties with conditonals
// if (cat.canSpeakFrench === true) {
//     console.log('oui')
// } else {
//     console.log('non')
// } // output: non

// console.log('Does my cat have legs?')
// if (cat.legs) { // using (cat.science) returns undefined bc that property isn't in the obj
//     console.log('oui')
// } else {
//     console.log('non')
// } // output: oui

// for (let i = 0; i < cat.legs; i++) {
//     console.log('legs')
// } // output: legs legs legs legs

// cat.meow()
// cat.purr()
// cat.talk('hewwo')

// extra things:

// FOR...OF loop for arrays
// for (let item of arr) {

// }

// FOR... IN loop for objects
// 

// for (let prop in cat) {
//     console.log('property: ', prop)
//     console.log('value: ', cat[prop]) // access the value
//     console.log()
// }









// in-class: make 2 objects


// OBJECT 1

// let mars = {
//     type: 'planet',
//     position: 4,
//     color: 'red',
//     nameOrigin: 'Roman',
//     associations: ['war', 'Tuesday', 'Aries'],
//     moon(moonName) {
//         console.log(moonName)
//     },
//     geography(type) {
//         console.log(type)
//     }
// }

// console.log(mars['position'])
// mars.moon('Phoibos')
// mars.geography('craters')




// // OBJECT 2
// let artemis = {
//     deity: 'goddess',
//     children: 0,
//     origin: 'Greek',
//     godOf: ['the hunt', 'the wilderness', 'nature', 'wild animals'],
//     siblings(name) {
//         console.log(name);
//     },
//     married: false,
// }

// artemis.siblings('Apollo')

// if (artemis.married === true) {
//     console.log('married: yes')
// } else {
//     console.log('married: no')
// }








// EXERCISE 1
// let strArg = function(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         count++;        
//     } return {
//         str[]: count
//     };
// }
// console.log(strArg('dog'))

// let strArg = function(str) {
//     let myObj = {};
//     for (let char of str) {
//         if (myObj[char]) {
//             myObj[char]++;
//         } else {
//             myObj[char] = 1
//         }
//     } return myObj;
// }

// console.log(strArg('persephone'))



// EXERCISE 2

// function change(paid, cost) {
//         paid *= 100;
//         cost *= 100;
//         let changeReturn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//         while (paid > cost) {
//             if (paid >= cost + 5000) {
//                 paid -= 5000;
//                 changeReturn[0] ++;
//             } else if (paid >= cost + 2000) {
//                 paid -= 2000;
//                 changeReturn[1] ++;
//             } else if (paid >= cost + 1000) {
//                 paid -= 1000;
//                 changeReturn[2] ++;
//             } else if (paid >= cost + 500) {
//                 paid -= 500;
//                 changeReturn[3] ++;
//             } else if (paid >= cost + 100) {
//                 paid -= 100;
//                 changeReturn[4] ++;
//             } else if (paid >= cost + 25) {
//                 paid -= 25;
//                 changeReturn[5] ++;
//             } else if (paid >= cost + 10) {
//                 paid -= 10;
//                 changeReturn[6] ++;
//             } else if (paid >= cost + 5) {
//                 paid -= 5;
//                 changeReturn[7] ++;
//             } else if (paid >= cost + 1) {
//                 paid--;
//                 changeReturn[8] ++;
//             }
//         } return {
//             fiftyDollar: changeReturn[0],
//             twentyDollar: changeReturn[1],
//             tenDollar: changeReturn[2],
//             fiveDollars: changeReturn[3],
//             oneDollar: changeReturn[4],
//             quarters: changeReturn[5],
//             dimes: changeReturn[6],
//             nickels: changeReturn[7],
//             pennies: changeReturn[8],
//         };
//     }
//     console.log(change(100, 27.83))



const cat = {
    name: 'Sprinkles',
    legs: 4,
    type: 'Feline',
    friends: [
        {
            name: 'George',
            legs: 4,
            type: 'Feline'
        },
        {
            name: 'Snake',
            legs: 3, 
            type: 'Feline'
        },
        {
            name: 'Rixio',
            legs: 2,
            buddies: [
                {
                    name: 'Arthur',
                    fins: 5,
                    type: 'fish'
                },
                {
                    name: 'Perry',
                    type: 'platypus'
                }
            ]
        }
    ]
}

// how to access nested values

// 1. how do we access the string, 'Snake'

// console.log(cat.friends[1].name);
//     just square brackets: cat['friends'][1]['name']

// 2. how do we access the string, 'Rixio'

// console.log(cat.friends[2].name);
//      just square brackets: cat['friends'][2]['name']

// 3. how do we access the fins property?

// console.log(cat.friends[2].buddies[0].fins);
//      just square brackets: cat['friends'][2]['buddies'][0]



// target specific character of a property value
// y in platypus

console.log(cat.friends[2].buddies[1].type[1, [4]])
console.log(cat.friends[2].buddies[1].type.charAt(4))