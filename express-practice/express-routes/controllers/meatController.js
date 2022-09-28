const Meat = require('../models/meats')

// bring in seed data
const seed = require('../models/seed');

// route - GET /meat (index)
const findAllMeat = (req, res) => {
    // Find takes two arguments: 1. an object with our query (to filter our data and find exactly what we need), 2. callback (with an error object and the found data)
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Index', { meat: foundMeat })
        }
    })
}

// route - GET /meat/New (new)
const showNewView = (req, res) => {
    res.render('meat/New');
}

// route - POST /meat (create)
const createNewMeat = (req, res) => {
    // create has two arguments: 1. the data we want to send, 2. callback function
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
    }) 
}

// route - GET /meat/seed (seed)
const seedStarterData = (req, res) => {
    // delete all remaining documents, if there are any
    Meat.deleteMany({}, (err, deleteMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data')
            console.log(seed.meat)
            // data has been successfully deleted, now use seed data to repopulate the database
            Meat.create(seed.meat, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meat')
                }
            })
        }
    })
}

// route - GET /meat/:id (show)
const showOneMeat = (req, res) => {
    // findById accepts two arguments: 1. the id of the document in our database, 2. callback (with error object and found document)
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Show', { meat: foundMeat })
        }
    } )
}

// route - GET /:id/edit (edit)
const showEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Edit', { meat: foundMeat });
        }
    })
}

// route - PUT /:id (update)
const updateOneMeat = (req, res) => {
    // findByIdAndUpdate takes four arguments: 
    //      1. the id 
    //      2. new data we want to use to update old document
    //      3. (optional) an options object, 
    //          e.g.:  { new: true }
    //      4. callback (with error object and updatedFruit)
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat');
        }
    })
}

// route - DELETE /:id (delete)
const deleteAMeat = (req, res) => {    
    Meat.findByIdAndDelete(req.params.id, (err, deleteMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
    })
}

module.exports = {
    findAllMeat,
    showNewView,
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteAMeat,
}