// load express
const express = require('express');

// bring in our packaged route
const fruitRoutes = require('./routes/fruitRoutes');

const meatRoutes = require('./routes/meatRoutes');

const vegetableRoutes = require('./routes/vegetableRoutes');

// create express app
const app = express();
// identify port
const port = 3000;

// middleware
app.use('/api/fruits', fruitRoutes);

app.use('/api/meat', meatRoutes);

app.use('/api/vegetables', vegetableRoutes);









// setup root route
// app.get('/:color/:eat', (req, res) => {
//     const color = fruits.filter(fruits.color == 'yellow');
//     res.send(`yellow fruits: ${color}`)
// })

// app.get('/', (req, res) => {
//     quality = req.query.quality
//     if (quality == 'good'){
//         yes = fruits.filter(fruit => fruit.readyToEat === true)
//         res.send(yes)
//     } else if (quality == 'bad'){
//         no = fruits.filter(fruit => fruit.readyToEat === false)
//         res.send(no)
//     } else{
//         res.send(fruits)
//     }
// })

//listen to port
app.listen(port, () => {
    console.log('listening on port: ', port)
})

// use queries to filter the data sent back to the client. create at least 2 filters based off queries. you can use root route. 
// ?key=value
// req.query
// if statements
// filter method (JS)