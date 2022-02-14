const express=require('express')
const app=express();

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
var corsOptions={orgin:true}
app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send(`Welcome to express Server`)
})
//db connection
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to DB")})
.catch(err=>{`failed to connect,${err}`})

require('./routes/news.routes')(app)
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`)
})