const express=require('express');
const router=express.Router();

//Employee Data
let employees=[
    {
        id:'_abcdef',
        first_name:'John',
        last_name:'Wilson',
        email:'John@gmail.com',
        gender:'male',
        ip_address:'127.0.0.1'
    },
    {
        id:'_vwxyz',
        first_name:'laura',
        last_name:'Wilson',
        email:'laura@gmail.com',
        gender:'female',
        ip_address:'9845.56.32'

},
{
    id:'_fghij',
    first_name:'Ifeoluwa',
    last_name:'Falade',
    email:'ifeoluwa@gmail.com',
    gender:'female',
    ip_address:'127.125.45.66'
}
];

//Get ID
let getID=()=>{
    return '_' + Math.random().toString(36).substr(2,9);

}

//GET -Employees
router.get('/employees',(request,response)=>{
    response.json(employees);
})

//POST Request
router.post('/employees',(request,response)=>{
    let employee ={
        id:getID(),
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address
    }
    employees.push(employee);
    console.log(`POST Request received at server... ${new Date().toLocaleTimeString()}`);
});

//PUT Request'
router.put('/employees/:id',(request,response)=>{
    let empId=request.params.id;
    let updateEmployee={
        id:empId,
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email,
        gender:request.body.gender,
        ip_address:request.body.ip_address
    }
    let existingEmployee=employees.find((employee)=>{
        return employees.id===empId;
    });
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee);
    console.log(`PUT Request received at server...${new Date().toLocaleTimeString()}`);
})

//DELETE Request
router.delete('/employees/:id',(request,response)=>{
    let empId=request.params.id;
    employees=employees.filter((employees)=>{
        return employee.id!==empId;
    });
    console.log(`DELETE Request received at server...${new Date().toLocaleTimeString()}`);
})



//REST API Configuration 



module.exports=router;