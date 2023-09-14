const express=require('express')
const route=express.Router();

route.get('/example',(req,res)=>{
    res.send('being hit')
})

module.exports=route;