exports.findAll=(req,res)=>{
    const config=require('../config')
    const db=require('../models')
    const News=db.News

    News.find().then(data=>{
        if(!data){
            res.status(400).send({message:`Id not found`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:err||`Some Error found`})})
}