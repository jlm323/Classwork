// load express
const express = require('express');

// create a special router object for our routes
const router = express.Router();

const { findAllVegetables, showNewView, deleteAVegetables, updateOneVegetables, createNewVegetables, showEditView, showOneVegetables, seedStarterData} = require('../controllers/vegetableController');

// setup index route
router.get('/', findAllVegetables);

//setup New route
router.get('/new', showNewView)

//setup Delete route
router.delete('/:id', deleteAVegetables)

// setup update route
router.put('/:id', updateOneVegetables)

// setup create route
router.post('/', createNewVegetables);

// setup edit route
router.get('/:id/edit', showEditView)

// setup 'seed' route
router.get('/seed', seedStarterData)

// setup show route
router.get('/:id', showOneVegetables);



module.exports = router;
