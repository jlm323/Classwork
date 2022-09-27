// load express
const express = require('express');

// load our fruits data
// const fruits = require('../models/fruits');

// loading our Model
const Fruit = require('../models/fruit');

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// create a special router object for our routes
const router = express.Router();


// setup root route
// router.get('/', () => {
//     res.send('<h1>Hello World!</h1>');
// });

// 7 RESTful routes:

// setup index route
router.get('/', (req, res) => {
    // Find takes two arguments: 1. an object with our query (to filter our data and find exactly what we need), 2. callback (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit })
        }
    })

    // res.send(fruits);
    // res.render('fruits/Index', { fruits: fruits });
});

// setup new route
router.get('/new', (req, res) => {
    // res.send('<form>create fruit</form>');
    res.render('fruits/New');
});

// setup create route
router.post('/', (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    // create has two arguments: 1. the data we want to send, 2. callback function
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
        
    }) 
    // fruits.push(req.body);
    
    // res.redirect('/fruits');
    // res.send('creating a new fruit');
});

// setup show route
router.get('/:id', (req, res) => {

    // findById accepts two arguments: 1. the id of the document in our database, 2. callback (with error object and found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit})
        }
    } )
    // res.send(fruits[req.params.index]);
    // res.render('fruits/Show', {fruit: fruits[req.params.index]});
});

// setup edit route
router.get('/:index/edit', (req, res) => {
    res.send('<form>edit fruit</form>');
});

// setup update route
router.put('/:index', (req, res) => {
    res.send('updating a fruit');
});

// setup destroy route
router.delete('/:index', (req, res) => {
    res.send('delete a fruit');
});

module.exports = router;