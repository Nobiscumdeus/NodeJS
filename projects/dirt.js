//Dirt from bethel.js 


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