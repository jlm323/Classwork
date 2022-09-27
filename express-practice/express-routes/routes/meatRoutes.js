// load express
const express = require('express');

// load our meat data
// const meat = require('../models/meat');
const Meat = require('../models/meat');

// create a special router object for our routes
const router = express.Router();


// setup index route
router.get('/', (req, res) => {
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Index', { meat: foundMeat })
        }
    })

    // res.render('meat/Index', { meat: meat });
});

//setup New route
router.get('/new', (req, res) => {
    res.render('meat/New');
})

// setup create route
router.post('/', (req, res) => {
    
    // create has two arguments: 1. the data we want to send, 2. callback function
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
        
    }) 

    // meat.push(req.body);
    // console.log(meat);
    // res.redirect('/meat');
});

// setup show route
router.get('/:id', (req, res) => {

    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Show', {meat: foundMeat})
        }
    // res.render('meat/Show', { meat: meat[req.params.index]});
});
});


// setup edit route
// router.get('/:index/edit', (req, res) => {
//     res.send('<form>edit meat</form>');
// });

module.exports = router;
