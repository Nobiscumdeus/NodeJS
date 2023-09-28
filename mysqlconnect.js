var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"choir"
})

con.connect(function(err){
   // if(err)throw err;
   if(err)
   console.log('Ooops!! Error occurred in reaching the database')
   
   // sql="SELECT * FROM newchoristers";
    con.query("SELECT * FROM newchoristers",function(err,result,fields){
       // if(err) throw err;
       if(err)
       console.log('Cannot reach the database records')
        //console.log(result)
        //console.log(result[2].fullnames)
        console.log(fields)
    })
})