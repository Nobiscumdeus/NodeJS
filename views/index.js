const express=require('express')
const app=express()

//set up the views 
app.set('view engine','ejs')
//app.set('views',__dirname+'/views');
app.set('views',__dirname,"/");

//Define the quiz questions and answers
const questions=[
    {
        question:"What is the capital of Nigeria ?",
        options:[
            {answer:"a",text:"Lagos"},
            {answer:"b",text:"Abuja"},
            {answer:"c",text:"Kaduna"}
            
        ],
        answer:"b"

    },
    {
        question:"What is the currency in Nigeria ?",
        options:[
            {answer:"a",text:"US Dollars"},
            {answer:"b",text:"Lira"},
            {answer:"c",text:"Naira"}
        ],
        answer:"c"
    }

]

//Render the quiz questions
app.get("/",(req,res)=>{
    res.render("index",{questions});
});

//Handle the quiz submission
app.post("/submit",(req,res)=>{
    let score=0;

    //check for answers
    for (let i = 0; i < questions.length; i++) {
        if (req.body['q' + (i + 1)] === questions[i].answer) {
            score++;
        }
    }
    res.render('results', { score, total: questions.length });
    
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});