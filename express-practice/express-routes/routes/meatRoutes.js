// load express
const express = require('express');

// create a special router object for our routes
const router = express.Router();

// bring in controller functions
const { findAllMeat, showNewView, deleteAMeat, updateOneMeat, createNewMeat, showEditView, seedStarterData, showOneMeat, clearData } = require('../controllers/meatController')



// setup index route
router.get('/', findAllMeat);

//setup New route
router.get('/new', showNewView)

//setup Delete route
router.delete('/:id', deleteAMeat)

// setup update route
router.put('/:id', updateOneMeat)

// setup create route
router.post('/', createNewMeat);

// setup edit route
router.get('/:id/edit', showEditView)

// setup 'seed' route
router.get('/seed', seedStarterData)

// clear route
router.get('/clear', clearData)

// setup show route
router.get('/:id', showOneMeat);



module.exports = router;
