exports.findOne=(req,res)=>{
    const db=require('../models')
    const News=db.News;
    const id=req.params.id

    News.findById(id).then(data=>{
        if(!data){
            res.status(400).send({message:`Data not found`})
        }
        else{res.send(data)}
    }).catch(err=>{res.status(500).send({message:`Some Error Found`})})
}