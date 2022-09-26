// load express
const express = require('express');

// load our fruits data
const fruits = require('../models/fruits');

// create a special router object for our routes
const router = express.Router();


// setup root route
// router.get('/', () => {
//     res.send('<h1>Hello World!</h1>');
// });

// 7 RESTful routes:

// setup index route
router.get('/', (req, res) => {
    // res.send(fruits);
    res.render('fruits/Index', { fruits: fruits });
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
    fruits.push(req.body);
    console.log(fruits);
    res.redirect('/fruits');
    // res.send('creating a new fruit');
});

// setup show route
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index]);
    res.render('fruits/Show', {fruit: fruits[req.params.index]});
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