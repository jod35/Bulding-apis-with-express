const router=require('express').Router();

router.get('/',(request,response) =>{
        response.send({message:"How are you?"})
})


module.exports = router;