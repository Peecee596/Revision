const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
var corsOption={origin:true}
app.use(cors(corsOption))


app.get("/",(req,res)=>{
    res.send("Welcome to express server")
})

//connect to db

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})