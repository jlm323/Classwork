// load express
const express = require('express');

// load our vegetables data
const vegetables = require('../models/vegetables');

// create a special router object for our routes
const router = express.Router();



// setup index route
router.get('/', (req, res) => {
    res.render('vegetables/Index', { vegetables: vegetables });
});

router.get('/new', (req, res) => {
    res.render('vegetables/New');
})

router.post('/', (req, res) => {
    vegetables.push(req.body);
    console.log(vegetables);
    res.redirect('/vegetables');
});

// setup show route
router.get('/:index', (req, res) => {
    res.render('vegetables/Show', { vegetables: vegetables[req.params.index]});
});

module.exports = router;
