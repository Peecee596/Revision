exports.update=(req,res)=>{
    const db=require('../models')
    const config=require('../config/db.config')
    const News=db.News
    const id=req.params.id
    if(!req.body){
        res.status(500).send({message:`Data cannot be empty`})
    }
    News.findByIdAndUpdate(id,req.body,{useFindAndModify:true}).then(data=>{
        if(!data){
            res.status(400).send({message:err||`Data not found with this id`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:err||`Some Error Found`})})
}