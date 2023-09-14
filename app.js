const express=require('express')
const app=express()
const conn=require('./mongo/connect.js')
const postModel=require('./mongo/connect.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Crud application
app.post('/mongo',async(req,res)=>{
    const {title,content}=req.body
    try{
        const newPost=await postModel.create({title,content})
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)
    }
})
app.get('/mongo',async(req,res)=>{
    try{
        const posts=await postMode.find();
        res.json(posts)

    }catch(err){
        res.status(500).send(error)

    }
})

//get specific id
app.get('/mongo/:id',async(req,res)=>{
    const {id} =req.params
    try{
        const post=await postModel.findBy(id);
        res.json(post)


    }catch{
        res.status(500).send(error)

    }
})

//update details 
app.put('/mongo/:id',async(req,res)=>{
    const {id} =req.params
    const {title,content}=req.body;
    try{
        const post=await postModel.findByIdAndUpdate(id,title,content)
        res.json(post)

    }catch(err){
        res.status(500).send(error)

    }
})

//To delete 
app.delete('/mongo/:id',async(req,res)=>{
    const {id} =req.params
  
    try{
        const post=await postModel.findById(id)
        await post.remove();
        res.json('Post deleted sucessfully')

    }catch(err){
        res.status(500).send(error)

    }
})

app.listen(3001,()=>{
    console.log('Listening on port 3001');
})