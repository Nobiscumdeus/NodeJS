
//CREATION OF TABLE IN mysql
var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'family'
})

con.connect(function(err){
    if(err) throw err;
    console.log("Connection made successfully");
    //sql to create a table
    const sql_create="CREATE TABLE adeolas (id INT AUTO_INCREMENT PRIMARY KEY,fullnames VARCHAR(200),occupation VARCHAR(200),position VARCHAR(200), birthmonth VARCHAR(200)) ";
    //sql to alter a database
    const sql_alt="ALTER TABLE adeolas ADD COLUMN sex VARCHAR(15)";
    //inserting values into table
    const sql_ins="INSERT INTO adeolas(fullnames,occupation,position,birthmonth,sex) VALUES('Mr Adeola Ilesanmi','Cocoa Merchant; Large Scale Farmer','Father','September','Male')"
    //inserting multiple records;
    const sql_mul="INSERT INTO adeolas(fullnames,occupation,position,birthmonth,sex) VALUES?";
    const values=[
        ['Mrs Deborah Adeola','Civil Servant','Mother','January','Female'],
        ['Dr Olumide Adeola','Medical Doctor','First Son','October','Male'],
        ['Mr Afolabi Adeola','Student','Second Son','January','Male'],
        ['Mr Kolapo Adeola','Student','Third Son','March','Male'],
        ['Miss Precious Adeola','Nurse','Daughter','April','Female'],

    ]
    //con.query(sql_mul,[values],function(err,result){

    //Making Selection from database
    var sql_sel="SELECT fullnames,occupation FROM adeolas";
    //Selectin with likes 
    var sql_lik="SELECT fullnames FROM adeolas WHERE sex LIKE 'M%' "

//Dealing with mysqli escape from records sent to server
    var adr="Medical Doctor"
    var sql_doc ="SELECT * from adeolas WHERE occupation= "+mysql.escape(adr);
    //in case there are multiple records
    var find="Student"
    var find2="Nurse"
    sql_find="SELECT * FROM adeolas WHERE occupation= ?"; // con.query(sql_find,[find,find2],function(err,result,fields){
    //Dealing with ordering by ascending ASC or descending order DESC
    sql_ord="SELECT * FROM adeolas ORDER BY birthmonth DESC"
    //update 
    var sql_upd="UPDATE adeolas SET position='Head abd Father of the Family' WHERE fullnames='Mr Adeola Ilesanmi'"
    con.query(sql_upd,function(err,result,fields){
    if(err) throw err;
    console.log("Update done successfully");
    console.log(result);
    //console.log(fields);
    console.log(result.affectedRows)
   })
})
