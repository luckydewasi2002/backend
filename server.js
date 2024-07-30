const express = require('express');
const colors = require("colors");
const dotenv = require ("dotenv");
const morgan = require("morgan");
const userdata = require("./utility/product.json")
const PORT = 5000;

const app =express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send(userdata)
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.yellow.bold)
})



// const express = require('express');


// const app =express();

// app.get('/',(req,res)=>{
//     res.send('hello world!')
// })


// app.listen(3000,()=>{
//     console.log(`server running on port 3000`)
// })
