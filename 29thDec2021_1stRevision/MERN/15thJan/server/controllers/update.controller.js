exports.update=(req,res)=>{
    const db=require('../models')
    const id=req.params.id

    const News=db.News
    if(!req.body){
        res.status(400).send({message:`Data not found`})
    }
    News.findByIdAndUpdate(id,req.body,{useFindAndModify:true}).then(data=>{
        if(!data){
            res.status(500).send({message:`data not found with Id to Update`})
        }
        res.send(data)
    }).catch(err=>{res.status(500).send({message:`Some Error Occured`})})
}