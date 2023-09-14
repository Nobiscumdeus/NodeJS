const express=require('express')
const mongoose=require('mongoose')
const app=express();
const uri="mongodb+srv://Chasfat:Chasfat@cluster0.o4iiqcz.mongodb.net/test"


async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to Mongodb");
    }catch(error){
        console.error(error)

    }
}
connect();
app.listen(8080,()=>{
    console.log("Server has started at base 8080")
})