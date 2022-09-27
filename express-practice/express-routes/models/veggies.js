// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create Schema
const veggieSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
})

// create a Model from our Schema
const Vegetable = mongoose.model('Vegetable', veggieSchema)

// export the Model
module.exports = Vegetable;