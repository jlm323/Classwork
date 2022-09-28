// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create Schema
const vegetableSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
})

// create a Model from our Schema
const Vegetables = mongoose.model('Vegetables', vegetableSchema)

// export the Model
module.exports = Vegetables;