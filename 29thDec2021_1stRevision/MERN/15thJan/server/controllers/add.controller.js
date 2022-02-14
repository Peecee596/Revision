exports.add=(req,res)=>{
    const db=require('../models')
    const News=db.News

    if(!req.body.title){
        res.status(500).send({message:`Title canot be empty`})
    }
    const news=new News({
        title:req.body.title,
        news:req.body.news,
        publishedat:req.body.publishedat,
        author:req.body.author
    })
    news.save(news).then(data=>{
        res.send(data)
    }).catch(err=>{res.status(500).send({message:`Some error Occcured...`})})
}