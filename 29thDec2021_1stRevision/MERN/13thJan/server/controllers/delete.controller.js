exports.delete=(req,res)=>{
    const db=require('../models')
    const config=require('../config')
    const News=db.News
    const id=req.params.id
    News.findByIdAndRemove(id).then(data=>{
        if(!data){
            res.status(500).send({message:err||`No id matches with this data`})
        }
        res.send(data)
    }).catch(err=>{res.status(400).send({message:err||`Some Error Found`})})

}