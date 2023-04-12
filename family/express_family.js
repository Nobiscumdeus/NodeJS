const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send('Hello world')
})
app.get('/family',function(req,res){
    res.sendFile(__dirname + "/family.html");

})
app.get('/home',function(req,res){
    res.sendFile(__dirname+ "/home.html");

})

app.get('/kola/20',function(req,res){
    res.send("Kola will be 20 years old")
})
app.get('/alien/:id',function(req,res){
    const id=req.params.id;
    //You can also apply functions to manipulate the parameter eg id
    res.send("Alien is definitely going to be a member" + id)
})
app.listen(9000,function(req,res){
    console.log("Running...");
})

