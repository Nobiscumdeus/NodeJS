const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const apiRouter=require('./api/apiRouter');

const hostname='127.0.0.1';
const port=3000;

//Configure BodyParser
const jsonParser=bodyParser.json();
const urlEncodedParser=bodyParser.urlencoded({extended:false});
app.use(jsonParser);
app.use(urlEncodedParser);

//Configure cors
app.use(cors());

//Configure the Router
app.use('/api',apiRouter);



//Get request
app.get('/',(request,response)=>{
    response.send('<h2> Welcome to Express server or Employee Portal </h2>')
})
app.get('/chasfat',(request,response)=>{
    response.send('<h3> Actually the codes are developed by Dr Chasfat... </h2>');

})

app.listen(port,hostname,()=>{
    console.log(`Express Server has started successfully at https://${hostname}:${port}...`)
})