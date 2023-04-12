var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"choir"
})

con.connect(function(err){
    if(err)throw err;
   
   // sql="SELECT * FROM newchoristers";
    con.query("SELECT * FROM newchoristers",function(err,result,fields){
        if(err) throw err;
        //console.log(result)
        //console.log(result[2].fullnames)
        console.log(fields)
    })
})