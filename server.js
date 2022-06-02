//=======================Setup

//load express
const express = require('express');
//call express function
const pokemonData = require('./Models/pokemon');
require('dotenv').config()

const mongoose = require('mongoose')

const app = express();
//load the port for the server

const PORT = 3000;
console.log('Server test!')

app.set('view engine', 'ejs');
app.set('views', './Views')
//=========================middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//*============Route setup 

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})
//app.get ('/pokemon', (req, res) => {
 //   res.render(pokemonData);
//})


app.get('/pokemon', (req, res) => {
    res.render('Index',{
        pageTitle: 'Pokemon',
        pageHeader: 'See all of the Pokemon!',
        pokemondata: pokemonData
    })
    
})

app.post('/pokemon', (req, res) => {
    console.log(req.body)
})

app.get('/pokemon/new', (req, res) => {
    res.render('new',{
        pageTitle: 'New Pokemon',
        pageHeader: 'Create a new Pokemon'
    })
})

///////////////////////////Post request






app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {
        pageTitle: 'Details',
        pageHeader: "Gotta catch them all",
        pokemon: pokemonData
    })
})
app.get('/pokemon/:id',(req, res) => {
    //res.send(req.params.id);
    const result = pokemon.filter(item=> item.id === Number(req.params.id))
    res.render("Show", {pokemon: result[0]})
})

  

//========================================listen out for the server
app.listen(PORT,() => {
    console.log(`Server is listening on port: ${PORT})`)
    mongoose.connect(process.env.MONGODB_URI)// Connects to MongoDB
    console.log('MongoDB connected!')
})