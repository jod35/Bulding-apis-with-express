const app = require('express')();
const body_parser =require('body-parser');
const morgan = require('morgan');
const cors= require('cors');
const { request } = require('express');
const router=require('./toutes/routes');


app.disable('x-powered-by');

app.use(body_parser.json());

app.use(body_parser.urlencoded());

app.use(morgan('dev'));


app.use('/api',router);

const log=(request,response,next)=>{
    console.log("Logging")

    next();
}

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


