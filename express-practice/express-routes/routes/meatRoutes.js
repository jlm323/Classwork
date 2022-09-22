// load express
const express = require('express');

// load our meat data
const meat = require('../models/meat');

// create a special router object for our routes
const router = express.Router();


// setup index route
router.get('/', (req, res) => {
    res.send(meat);
});

// setup show route
router.get('/:index', (req, res) => {
    res.send(meat[req.params.index]);
});

module.exports = router;
