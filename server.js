//load express
const express = require('express');
//call express function
const pokemon = require('./Models/pokemon');

const app = express();
//load the port for the server

//
let PORT = 3000;
console.log('Server test!')

app.set('view engine', 'ejs');
app.set('views', './Views')

app.get('/', (req, res) => {
    res.send('Welcome to the pokemon app!');
})


app.get('/pokemon', (req, res) => {
    res.render('Index',{data: pokemon})
    
})

//listen out for the server
app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT})`)
})