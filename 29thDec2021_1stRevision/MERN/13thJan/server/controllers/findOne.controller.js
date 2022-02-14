exports.findOne=(req,res)=>{
    const db=require('../models')
    const config=require('../config/db.config')
    const News=db.News
    const id=req.params.id;

    News.findById(id).then(data=>{
        if(!data){
            res.status(400).send({message:`Not found with this id`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:err||`Some error occured`})})
}