// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create Schema
const fruitSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
})

// create a Model from our Schema
const Fruit = mongoose.model('Fruit', fruitSchema)

// export the Model
module.exports = Fruit;