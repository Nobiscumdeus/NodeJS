const express=require('express')
const http=require('http')
const app=express()
const fs=require('fs')
const bodyparser=require('body-parser')
const PORT =3000

//Middle ware 
app.use(bodyparser.json())

//Get all students 
app.get('/students',(req,res)=>{
    const students=JSON.parse(fs.readFileSync('data.json','utf-8'))
    res.json(students)
})

//Get a specific student ID 

app.get('/students/:name',(req,res)=>{
    const students=JSON.parse(fs.readFileSync('data.json','utf-8'))
    //const student=students.find((s)=>s.id === parseInt(req.params.id))
    const student = students.find((s) => s.name.toLowerCase() === req.params.name.toLowerCase());

    if(student){
        res.json(student)
    }else{
        res.status(404).json({message:'Student not found'})
    }

})

//Post a New Student 
app.post('/students',(req,res)=>{
    const students=JSON.parse(fs.readFileSync('data.json','utf-8'))
    const newStudent=req.body;
    const studentId=students.length +1;
    students.push(newStudent)
    fs.writeFileSync('data.json',JSON.stringify(students,null,2));
    res.status(201).json(newStudent)
})

//Update ot put students 
app.put('/students:id',(req,res)=>{
    const students =JSON.parse(fs.readFileSync('data.json','utf-8'))
    const studentIndex=students.findIndex((s)=>s.id ===parseInt(req.params.id))

    if(studentIndex !==-1){
        students[studentIndex] ={ id:parseInt(req.params.id),...req.body};
        fs.writeFileSync('data.json',JSON.stringify(students,null,2))
        res.json(students[studentIndex])


    }else{
        res.status(404).json({message:'Student not found'})
    }

})

//Delete a student 
app.delete('/students:id',(req,res)=>{
    const students=JSON.parse(fs.readFileSync('data.json','utf-8'));
    const studentIndex = students.findIndex((s) => s.id === parseInt(req.params.id));

    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1)[0];
        fs.writeFileSync('students.json', JSON.stringify(students, null, 2));
        res.json(deletedStudent);
      } else {
        res.status(404).json({ message: 'Student not found' });
      }
})

app.listen(PORT,()=>{
    console.log('Server is listening at port 3000')
})