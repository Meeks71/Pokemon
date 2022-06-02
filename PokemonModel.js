
const mongoose =require('mongoose')
//Create the schema
const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)