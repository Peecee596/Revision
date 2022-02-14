const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send('Welcome to Express Server')
})
//db connect

const db=require('./models')

db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(data=>{console.log("Connected to the error")})
.catch(err=>{console.log("error",err)})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})