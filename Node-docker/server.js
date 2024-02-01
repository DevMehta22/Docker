require("dotenv").config(); 
const express  =require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello baby User!!</h1>");
})

app.listen(process.env.PORT || 3000,(err)=>{
    if (err) throw err;
    console.log(`server is up and running!`);
})