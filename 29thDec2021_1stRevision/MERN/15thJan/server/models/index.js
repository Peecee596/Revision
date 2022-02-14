const mongoose=require('mongoose')
const config=require('../config/db.config')

mongoose.Promise=global.Promise
db={}
db.mongoose=mongoose;
db.url=config.url;
db.News=require('./news.model')(mongoose)
module.exports=db;

