module.exports=app=>{
    const Add=require('../controllers/add.controller')
    const Delete=require('../controllers/delete.controller')
    const FindAll=require('../controllers/findAll.contoller')
    const FindOne=require('../controllers/findOne.controller')
    const Update=require('../controllers/update.controller')

    var router=require('express').Router()

    router.post('/',Add.add)
    router.get('/',FindAll.findAll)
    router.get('/:id',FindOne.findOne)
    router.delete('/:id',Delete.delete)
    router.put('/:id',Update.update)

    app.use('/api/news/',router)
}