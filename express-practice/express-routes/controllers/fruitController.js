const Fruit = require('../models/fruit')

// bring in seed data
const seed = require('../models/seed');

// route - GET /fruits (index)
const findAllFruits = (req, res) => {
    // Find takes two arguments: 1. an object with our query (to filter our data and find exactly what we need), 2. callback (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', { fruits: foundFruit })
        }
    })
}

// route - GET /fruits/New (new)
const showNewView = (req, res) => {
    res.render('fruits/New');
}

// route - POST /fruits/ (create)
const createNewFruit = (req, res) => {
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
}

// route - GET /fruits/seed (seed)
const seedStarterData = (req, res) => {
    // delete all remaining documents, if there are any
    Fruit.deleteMany({}, (err, deleteFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data')
            console.log(seed.fruits)
            // data has been successfully deleted, now use seed data to repopulate the database
            Fruit.create(seed.fruits, (err, createdFruit) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/fruits')
                }
            })
        }
    })
}

// route - GET /fruits/:id (show)
const showOneFruit = (req, res) => {
    // findById accepts two arguments: 1. the id of the document in our database, 2. callback (with error object and found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit})
        }
    } )
}

// route - GET /:id/edit (edit)
const showEditView = (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Edit', { fruit: foundFruit });
        }
    })
}

// route - PUT /:id (update)
const updateOneFruit = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    // findByIdAndUpdate takes four arguments: 
    //      1. the id 
    //      2. new data we want to use to update old document
    //      3. (optional) an options object, 
    //          e.g.:  { new: true }
    //      4. callback (with error object and updatedFruit)
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits');
        }
    })
}

// route - DELETE /:id (delete)
const deleteAFruit = (req, res) => {    
    Fruit.findByIdAndDelete(req.params.id, (err, deleteFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

module.exports = {
    findAllFruits,
    showNewView,
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    deleteAFruit,
}