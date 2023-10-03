const http=require('http')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mysql=require('mysql2/promise')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true})) //serves the funvtion of middleware 
app.use(express.static('public')) //Our css files will ve created in this folder


app.get('/bethel',(req,res)=>{
    res.render('bethel');
})
/**
app.post('/attendance-submission',(req,res)=>{
    //Access the attendance data using form body
    
    //For Sundays 
    const sunday_males=req.body.sunday_males
    const sunday_females=req.body.sunday_females
    const sunday_children=req.body.sunday_children
    const sunday_converts=req.body.sunday_converts
    const sunday_guests=req.body.sunday_guests
    const sunday_total=req.body.sunday_total
    const sunday_date=req.body.sunday_date
    const sunday_minister=req.body.sunday_minister
    const sunday_message=req.body.sunday_message

    
    

    //For Wednesdays 
    const wednesday_males=req.body.wednesday_males
    const wednesday_females=req.body.wednesday_females
    const wednesday_children=req.body.wednesday_children
    const wednesday_converts=req.body.wednesday_converts
    const wednesday_guests=req.body.wednesday_guests
    const wednesday_total=req.body.wednesday_total
    const wednesday_date=req.body.wednesday_date
    const wednesday_minister=req.body.wednesday_minister
    const wednesday_message=req.body.wednesday_message

    //Perform database operations here
    //1. Create a database connection 
    const connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'bethel_attendance'
    });
    //2. Open the database connection 
    connection.connect((err)=>{
        if(err){
            console.error('Ooops!!! Error connecting to the database ')
            return;
        }
        console.log('Connected to the bethel_attendance database successfully ')
        //3. Define SQL queries to insert data into database
        const sundayInsertQuery='INSERT INTO sunday (males,females,children,converts,guests,total,date,minister,message) VALUES(sunday_males,sunday_females,sunday,children,sunday_converts,sunday_guests,sunday_total,sunday_date,sunday_minister,sunday_message)'
        const wednesdayInsertQuery='INSERT INTO wednesday (males,females,children,converts,guests,total,date,minister,message) VALUES(wednesday_males,wednesday_females,wednesday,children,wednesday_converts,wednesday_guests,wednesday_total,wednesday_date,wednesday_minister,wednesday_message)'

        //4. Execute the insert 
    })


    //When done 
    res.redirect('/bethel') //
    
})
**/

//connect to the dataase
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'bethel_attendance',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

//Handling the submission 
app.post('/attendance-submission',async(req,res)=>{
    try{
        const connection=await pool.getConnection();

        //capture form data from the request
        const {sunday_males,wednesday_males,sunday_females,wednesday_females,sunday_children,wednesday_children,sunday_converts,wednesday_converts,sunday_guests,wednesday_guests,sunday_total,wednesday_total,sunday_date,wednesday_date,sunday_minister,wednesday_minister,sunday_message,wednesday_message}=req.body
console.log(sunday_males)
        //start a database connection 
        
        //insert data into your table (modify the query as needed )
        const sundayQuery='INSERT INTO sunday(males,females,children,converts,guests,total,date,minister,message)VALUES(?,?,?,?,?,?,?,?,?)'
        const wednesdayQuery='INSERT INTO wednesday(males,females,children,converts,guests,total,date,minister,message)VALUES(?,?,?,?,?,?,?,?,?)'
        
        await connection.execute(sundayQuery,[Number(sunday_males),Number(sunday_females),Number(sunday_children),Number(sunday_converts),Number(sunday_guests),Number(sunday_total),sunday_date,sunday_minister,sunday_message])
        await connection.execute(wednesdayQuery,[Number(wednesday_males),Number(wednesday_females),Number(wednesday_children),Number(wednesday_converts),Number(wednesday_guests),Number(wednesday_total),wednesday_date,wednesday_minister,wednesday_message])


        //Release the connection 
        connection.release();

        //Redirect or send a response when done 
        res.redirect('/bethel') //Redirect to a bethel page 

    }catch(error)
    {
        console.error('Error inserting data:',error)
        //Handle the errors and respond accordingly
        res.status(500).send('An error occurred while inserting data');
    }
})

app.listen(8000,()=>{
    console.log(`Bethel Attendance Server already running at port 8000`)
})