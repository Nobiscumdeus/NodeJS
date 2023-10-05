const http=require('http')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mysql=require('mysql2/promise')
const Chart=require('chart.js')
const $=require('jquery')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true})) //serves the funvtion of middleware 
app.use(express.static('public')) //Our css files will ve created in this folder


app.get('/bethel',(req,res)=>{
    res.render('bethel');
})

 app.get('/bethel-chart',(req,res)=>{
    res.render('bethel-chart')
})
app.get('/bethel-sunday',(req,res)=>{
    res.render('bethel-sunday')
})
app.get('/bethel-wednesday',(req,res)=>{
    res.render('bethel-wednesday')
})

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
        console.log(sunday_total)
        console.log(wednesday_total)
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


///Another section of passing data from the server/database to the frontend to plot our various charts
app.get('/bethel-charting',async(req,res)=>{
    try
    {
        //create a database connection 
        const connection=await mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'bethel_attendance'
        });

        //Fetch data from the wednesday table 
        const [wednesdayRows, _]=await connection.query('SELECT * FROM wednesday')

        //Fetch data from the sunday table
        const [sundayRows, __]=await connection.query('SELECT * FROM sunday')

        //close the connection 
        connection.end();

        //Combine the data and send it as a response 
        const chartData={
            wednesdayData:wednesdayRows,
            sundayData:sundayRows,

        };
      res.json(chartData);
      
    //res.json(chartData.wednesdayData)
   
    }catch(error)
    {
        console.error('Error retrieving the data',error);
        res.status(500).send('An error occurred while retrieving data ')
    }
})

app.listen(8000,()=>{
    console.log(`Bethel Attendance Server already running at port 8000`)
})