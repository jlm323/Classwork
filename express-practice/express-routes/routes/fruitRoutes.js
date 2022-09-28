// load express
const express = require('express');

// load our fruits data
// const fruits = require('../models/fruits');

// create a special router object for our routes
const router = express.Router();



// bring in controller functions (destructure method)
const { findAllFruits, showNewView, createNewFruit, seedStarterData, showOneFruit, showEditView, updateOneFruit, deleteAFruit } = require('../controllers/fruitController')

//bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
    // example: router.get('/', fruitController.findAllFruits)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show


// 7 RESTful routes:

// setup index route
router.get('/', findAllFruits);

// setup new route
router.get('/new', showNewView);

// setup delete route
router.delete('/:id', deleteAFruit);

// setup update route
router.put('/:id', updateOneFruit);

// setup create route
router.post('/', createNewFruit);

// setup edit route
router.get('/:id/edit', showEditView);

// setup 'seed' route
router.get('/seed', seedStarterData)

// setup show route
router.get('/:id', showOneFruit);




module.exports = router;
















/*

    1. work on delete and edit functionality for other food groups
    2. separate route logic into controller files and a controller folder
    3. create a seed route and "clear" route (which deletes all documents)
    4. optional: organize and save your routes in Postman
    

*/