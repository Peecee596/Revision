const mongoose=require('mongoose')
const dbconfig=require('../config/db.config')
mongoose.Promise=global.Promise

const db={}
db.mongoose=mongoose;
db.url=dbconfig.url;
db.News=require('../models/news.model')(mongoose)

module.exports=db;

