const express =require('express')
const app=express()

app.get("/",(req,res)=>{res.send(`Welcome to session 6`)})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Port Started at ${PORT}`)
})