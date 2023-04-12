var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

con.connect({function(err){
    if(err)throw err;
    console.log("Connected to database is successful !!!");
    con.query("CREATE DATABASE family",function(err,result){
        if(err) throw err;
       console.log('Database created')
    })
}})