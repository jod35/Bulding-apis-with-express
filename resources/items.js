const item_router=require('express').Router();


const controller =(request,response)=>{
    response.send({message:"Hello World"});
}


item_router.route('/')
.get((request,response)=>{
    response.status(404).send({message:"Not Found"});
})
.post(controller)


item_router.route('/:id')
.put(controller)
.delete(controller)
.patch(controller)

module.exports = item_router;