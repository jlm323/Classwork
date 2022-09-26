// load express
const express = require('express');

// load our meat data
const meat = require('../models/meat');

// create a special router object for our routes
const router = express.Router();


// setup index route
router.get('/', (req, res) => {
    res.render('meat/Index', { meat: meat });
});

//setup New route
router.get('/new', (req, res) => {
    res.render('meat/New');
})

// setup create route
router.post('/', (req, res) => {
    meat.push(req.body);
    console.log(meat);
    res.redirect('/meat');
});

// setup show route
router.get('/:index', (req, res) => {
    res.render('meat/Show', { meat: meat[req.params.index]});
});

// setup edit route
// router.get('/:index/edit', (req, res) => {
//     res.send('<form>edit meat</form>');
// });

module.exports = router;
