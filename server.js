//load express
const express = require('express');
//call express function
const app = express();
//load the port for the server

//
let PORT = 3000;
console.log('Server test!')



app.get('/', (req, res) => {
    res.send('Welcome to the pokemon app!');
})



app.get('/pokemons', (req, res) => {
    res.send(pokemons);
})
//app.set(viewengine,View.ejs);
//app.set()

//listen out for the server
app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT})`)
})