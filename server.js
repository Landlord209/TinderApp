// const express = require("ex")
import express from "express"
import mongoose from "mongoose"


//App Config
const app = express()
const port = process.env.PORT || 4020

const conn_url = "mongodb+srv://davidawolusi209:Davifresh209@.@cluster0.0h1ezsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//MiddleWears

 
//Db config
mongoose.connect(conn_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


//Api endPoints

app.get("/",(req, res)=> res.status(200).send("Hello World"))

//Listener

app.listen(port,()=> console.log(`Listen of local host ${port}`))


// const connString = "mongodb+srv://davidawolusi209:Davifresh209@.@cluster0.0h1ezsf.mongodb.net/"
