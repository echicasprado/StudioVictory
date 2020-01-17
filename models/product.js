'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//modelo
const ProductSchema = Schema({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: { type: String, enum:['computers','phones', 'accesories']},
    description: String
})

//exportar modelo 
module.exports = mongoose.model('Product',ProductSchema)