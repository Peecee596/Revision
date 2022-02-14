module.exports=mongoose=>{
    var schema=mongoose.Schema({
        title:String,
        news:String,
        publishedat:String,
        author:String
    },
    {
        timestamp:true
    })

    //convert id
    schema.method("toJSON",function(){
        const {__v,_id,...object}=this.toObject()
        object.id=_id
        return object
    })
    //store
    const News=mongoose.model("news",schema)
    return News;
}