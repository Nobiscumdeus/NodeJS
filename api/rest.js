const express=require('express')
const app=express()
const fs=require('fs')

app.get('/users',(req,res)=>{
    const students=JSON.parse(fs.readFileSync('rest.json','utf-8'))
    res.json(students);
    res.end();
    
})

app.listen(8080,()=>{
    console.log("The rest server has started at port 8080")
})