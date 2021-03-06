const app = require('express')();
const body_parser =require('body-parser');
const morgan = require('morgan');
const cors= require('cors');
const { request } = require('express');
const router=require('./toutes/routes');
const item_router =require('./resources/items');
const user_router=require('./resources/users');

app.disable('x-powered-by');

app.use(body_parser.json());

app.use(body_parser.urlencoded());

app.use(morgan('dev'));


app.use('/api',router);
app.use('/api/items',item_router);
app.use('/api/users',user_router);

const log=(request,response,next)=>{
    console.log("Logging")

    next();
}


const methods=['get /cats' , 'get /cats:id' , 'post /cats','put /cat:id','delete /cat:id']


//create a router REST methods
router.route('/cats')
.get((request,response)=>{
    response.send({"message":"Hello World"})
})
.post((request,response)=>{
    response.send({"message":"yo"})
})

router.route('/cat:id')
.patch()
.put()
.delete()



app.use(log); //run for the entire api

app.get('/',(request,response)=>{
    response.send({"message":"Hello World"});
})

app.post('/',(request,response)=>{
    console.log(request.body);

    response.send({"message":"OK"});
})


app.get('/greet',(request,response)=>{
    response.send({"message":"Hello there"});
})

app.post('/greet',(request,response)=>{
    response.send({"message":`Hello ${request.body.name}`});
})


app.get('/calc',(request,response)=>{
    response.send({"message":"This adds two numbers"});
})


//runs for a specific route 
app.post('/calc',log,(request,response)=>{
    total=request.body.x + request.body.y

    response.send({"total":total})
})

app.post('/data',(request,response)=>{
    response.send(request.body)
})


app.listen(3000,()=>{
    console.log("App running on http://localhost:3000");
})


