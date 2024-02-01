require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to our GET API"
    })
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Successfully connected to DB!");
    app.listen(process.env.PORT,(err)=>{
        if (err) throw  err;
        console.log("server is up and running on port 3000");
    })
}).catch((err)=>{
    console.log(err);
})

