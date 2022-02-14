exports.delete=(req,res)=>{
    const db=require('../models')
    const id=req.params.id
    const News=db.News

    News.findByIdAndRemove(id).then(data=>{
        if(!data){
            res.status(400).send({message:`Id not found with that ${id}`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:`Some error`})})
}