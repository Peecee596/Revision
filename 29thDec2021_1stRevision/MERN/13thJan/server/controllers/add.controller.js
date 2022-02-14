


exports.add=(req,res)=>{
    const db=require('../models')
    const News=db.News
    if(!req.body.title){
        res.status(400).send({message:`Content cannot be empty`})
    }
    const news= new News ({
                title:req.body.title,
                news:req.body.news,
                publishedat:req.body.publishedat,
                author:req.body.author
    })
    news.save(news).then(data=>{res.send({message:`News Added Successfully`})})
    .catch(err=>{res.status(500).send({message:err.message||`News Cant be Added`})})

}