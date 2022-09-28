// load express
const express = require('express');
// const mongoose = require('mongoose');
const methodOverride = require('method-override');

// bring in mongoConfig function
const mongoConfig = require('./config');

// bring in our packaged route
const fruitRoutes = require('./routes/fruitRoutes');

const meatRoutes = require('./routes/meatRoutes');

const vegetableRoutes = require('./routes/vegetableRoutes');


require('dotenv').config()

// create express app
const app = express();
// identify port
const port = process.env.PORT;

// setup our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
// app.use(express.json())
app.use(methodOverride("_method"))

// ?name=kiwi&color=green&readyToEat=value

app.use('/fruits', fruitRoutes);
app.use('/meat', meatRoutes);
app.use('/vegetables', vegetableRoutes);



// app.use('/api/meat', meatRoutes);

// app.use('/api/vegetables', vegetableRoutes);









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

// connect to db
mongoConfig()

// use queries to filter the data sent back to the client. create at least 2 filters based off queries. you can use root route. 
// ?key=value
// req.query
// if statements
// filter method (JS)




// lab
// 1. create index, new, show, and edit (form - just like New) for  meat, vegetables
// 2. make sure you the appropriate routes for the other two food groups
// 3. organize your views in subfolders and specify in res.render (ex. 'fruits/Index')