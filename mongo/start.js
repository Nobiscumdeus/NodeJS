const express=require('express')
const app=express()
const conn=require('/connect.js')

app.listen(3001,()=>{
    console.log('Listening on port 3001');
})