const express=require('express')
const http=require('http')
const bodyParser=require('body-parser')
const app=express()
const port=process.env.PORT || 8080

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true})) //serves the funvtion of middleware 
app.use(express.static('public')) //Our css files will ve created in this folder

const tasks=[] //stoe the tasks here
app.get('/todolist',(req,res)=>{
    res.render('todolist',{tasks });
})

app.post('/todolist/add',(req,res)=>{
    const newTask=req.body.task  //This collects the request from the input field 
    tasks.push(newTask);
    res.redirect('/todolist')
})

//Update a task (GET request to show the edit form )

app.get('/todolist/edit/:id',(req,res)=>{
    const taskId=parseInt(req.params.id);
    const taskToEdit=tasks[taskId];
    res.render('edit',{taskId,taskToEdit})
});

//Update a task (POST request to save the edited task )
app.post('/todolist/edit/:id',(req,res)=>{
    const taskId=parseInt(req.params.id)
    const editedTask=req.body.editedTask
    tasks[taskId]=editedTask;
    res.redirect('/todolist')
})

//Delete a task 
app.get('/todolist/delete/:id',(req,res)=>{
    const taskId=parseInt(req.params.id);
    tasks.splice(taskId,1)
    res.redirect('/todolist')
})
//start the server 
app.listen(port,()=>{
    console.log("Todo list application server started successfully ")
})




