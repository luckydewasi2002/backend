const express = require('express');
const colors = require("colors");
const dotenv = require ("dotenv");
const morgan = require("morgan");
const userdata = require("./utility/product.json")
const PORT = 5000;
const fileURLtoPatrh = require("url");
const path = require('path');
const app =express();

// express file vala middelware 

app.use(express.static(path.resolve(__dirname,"./public")))

//json file
app.use(express.json());
app.get('/home',(req,res)=>{
    res.send(userdata)
})
app.get("/wethercard1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","wethercard1.html"))
})

app.get("/wethercard2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","wethercard2.html"))
})

app.get("/wethercard3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","wethercard3.html"))
})
app.get("/wethercard4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","wethercard4.html"))
})

//profilecard starts

app.get("/profile1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","profile1.html"))
})
app.get("/profile2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","profile2.html"))
})
app.get("/profile3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","profile3.html"))
})


//portfolio cards starts

app.get("/portfolio1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","portfolio1.html"))
})
app.get("/portfolio2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","portfolio2.html"))
})
app.get("/portfolio3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","portfolio3.html"))
})

//calculator 

app.get("/calculator",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","calculator.html"))
})


//stopwatch

app.get("/stopwatch",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","stopwatch.html"))
})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`.yellow.bold)
})