const item_router=require('express').Router();


const controller =(request,response)=>{
    response.send({message:"Hello World"});
}


item_router.route('/')
.get(controller)
.post(controller)


item_router.route('/:id')
.put(controller)
.delete(controller)
.patch(controller)

module.exports = item_router;