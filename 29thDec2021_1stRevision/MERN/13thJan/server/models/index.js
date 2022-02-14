const mongoose=require('mongoose')
const config=require('../config/db.config')
mongoose.Promise=global.Promise
const db={}
db.mongoose=mongoose
db.url=config.url
db.News=require('./news.model')(mongoose)

module.exports=db;