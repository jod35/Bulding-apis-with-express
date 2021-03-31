const user_router=require('express').Router();

const controller =(request,response)=>{
    response.send("This is a user route")
}

user_router.route('/')
.get(controller)
.post(controller)

user_router.route('/:id')
.put(controller)
.delete(controller)
.patch(controller)


module.exports=user_router;