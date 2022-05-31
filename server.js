//load express
const express = require('express');
//call express function
const app = express();
//load the port for the server

//
let PORT = 3000;
console.log('Server test!')










//listen out for the server
app.listen(PORT,()=>{
    console.log(`Server is listening on port: ${PORT})`)
})