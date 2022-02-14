exports.findAll=(req,res)=>{
    const db=require('../models')
    const News=db.News

    News.find().then(data=>{
        if(!data){
            res.status(400).send({message:`No data found`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:`Some error found`})})
}