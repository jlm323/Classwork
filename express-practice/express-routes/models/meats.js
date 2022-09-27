// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create Schema
const meatSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
})

// create a Model from our Schema
const Meat = mongoose.model('Meat', meatSchema)

// export the Model
module.exports = Meat;