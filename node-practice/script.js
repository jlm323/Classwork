// const multiply = (a, b) => a * b
// // console.log(multiply(3, 3))

// // node modules

// const fs = require('fs');
// console.log(fs)

// fs.writeFile('./hello.txt', 'Hello!', () => {
//     console.log('Successfully created file!')
// })

//load the "days-of-the-week" module
// require returns the value from module.exports
// let daysOfWeek = require('./days-of-the-week')

// console.log(daysOfWeek)

// console.log(daysOfWeek.getWeekday(4))

let request = require('request')

request('http://jsonplaceholder.typicode.com/users', (err, res, body) => {
    console.log(body);
})