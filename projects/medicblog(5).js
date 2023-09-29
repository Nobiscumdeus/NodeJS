const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express()
const port =process.env.PORT || 3000
const dotenv=require('dotenv')
const path=require('path')


//Load the environment variables 
dotenv.config({path:path.resolve(__dirname,'../.env')})
const username=process.env.MONGO_USER
const password=process.env.MONGO_PASSWORD
const database=process.env.MONGO_DATABASE
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.i9zwcqc.mongodb.net/${database}`,{
    //medicblog here is our database 
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'))
db.once('open',()=>{
    console.log('Connected to MongoDB successfully')

})
//Define the database schemas and models here
const taskSchema=new mongoose.Schema({
    title:String,
    description:String,
    done:Boolean,
})
const Task=mongoose.model('Task',taskSchema) //Task here should servve a table 

//This link similar to the post method link helps us get the form whenever the page is accessed through links 

app.get('/tasks/add',(req,res)=>{
    //render the forms page for adding new posts 
    res.render('medicblogadd'); 
})
app.post('/tasks/add',async(req,res)=>{
    try
    {
        const {title,description,done}=req.body;
        const newTask=new Task({title,description,done})
        const savedTask=await newTask.save();
        res.status(201).json(savedTask);
    }
    catch(error)
    {
        res.status(500).json({error:'Ooops!!! Error creating task'})
    }
})
//We now handle the new post request coming from the edit form
app.post('/tasks/:taskId/edit',async(req,res)=>{
    try
    {
    const {title,description}=req.body
    const updatedPost=await Task.findByIdAndUpdate(
        req.params.taskId,{title,description},{new:true}
    );
    if(!updatedPost)
    {
        return res.status(404).send("Ooops!!! Post not found")
    }
    res.redirect('/tasks') //Redirect to the home page after updating
}
catch(error)
{
    res.status(500).send('Error updating post ')
}
})


/**
 * 
 * //Create a New Task 
app.post('/tasks',(req,res)=>{
    const {title,description,done}=req.body;
    const task=new Task({title,description,done})

    task.save((err,savedTask)=>{
        if(err){
            console.error(err)
            res.status(500).json({error:'Failed to create task'})
        }else
        {
            res.status(201).json({message:'Task created Successfully',task:savedTask})
        }
    })
})
 * app.get('/tasks',(req,res)=>{
   Task.find({},(err,tasks)=>{
    if(err)
    {
        console.error(err)
        res.status(500).json({error:'Failed to fetch tasks'})
    }else{
        res.status(500).json(tasks);
    }
   })
})
 */
//get a single task along with an id 
app.get('/tasks/:taskId',async(req,res)=>{
    const {taskId}=req.params; //Collected the id here
    try
    {
        const task=await Task.findById(taskId);
        if(!task)
        {
            res.status(404).json({error:'Ooops!!! Task not found '})

        }
        else
        {
            res.json(task) //Send the task as JSON
        }
    }
    catch(error)
    {
        res.status(500).json({error:'Error fetching task'})
    }
})

app.get('/tasks',async(req,res)=>{
    try
    {
        const tasks=await Task.find();
        res.render('medicblog',{tasks});

        }
        catch(error)
        {
            res.status(500).json({error:'Error fetcing tasks '})
        }
})


/** 
 * app.put('tasks/:taskId',async(req,res)=>{
    const {taskId}=req.params;
    try
    {
        const updatedTask=await Task.findByIdAndUpdate(taskId,req.body,{new:true});
        if(!updatedTask)
        {
            res.status(404).json({error:'Task not found'})
        }else{
            //res.json(updatedTask)
            res.json({success:true,message:'Task updated successfully'})
        }
    }
    catch(error)
    {
        res.status(500).json({error:'OOoops!!! Unable to update the task, try again..'})
    }
})

*/
//Update a task 

//Another method of updating through a form , done though get method 
app.get('/tasks/:taskId/edit',async(req,res)=>{
    try{
        const task=await Task.findById(req.params.taskId)
        if(!task)
        {
            return res.status(404).send('Post not found ')
        }
        res.render('medicblogedit',{task}); //Render the edit form 
    }
    catch(error)
    {
        res.status(500).send('Error fetching the posts ')
    }
})


//Delete task using an id 
app.delete('/tasks/:taskId/delete',async(req,res)=>{
    const {taskId}=req.params;
    try
    {
        const deletedTask=await Task.findByIdAndDelete(taskId);
        if(!deletedTask)
        {
            res.status(404).json({error:'Task not found'})

        }else{
          //  res.json(deletedTask)
          res.redirect('/tasks')
        }
    }catch(error)
    {
        res.status(500).json({error:'Error deleting task '})
    }
})
app.listen(port,()=>{
    console.log(`Medicblog server is listening at port ${port}`)
})