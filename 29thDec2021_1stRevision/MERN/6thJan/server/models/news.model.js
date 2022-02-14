module.exports=mongoose=>{

    var schema=mongoose.Schema({
        title:String,
        news:String,
        published:String,
        author:String
    },
    {
        timestamp:true
    }
    )

    //convert id 
    schema.method("toJSON",function(){
        const{__v,__id,...object}=this.toObject()
        object.id=__id
        return object
    })

    const News=mongoose.model("news",schema)
    return News;
}

