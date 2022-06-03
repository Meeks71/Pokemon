
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

//Create a new model 
module.exports = mongoose.model('Pokemon', pokemonSchema)