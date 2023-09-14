var MongoClient=require('mongodb').MongoClient;
var url="mongodb+srv://Chasfat:Chasfat@cluster0.o4iiqcz.mongodb.net/test";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("Chasfat");
    dbo.createCollection("customers",function(err,res){
        if(err) throw err;
        console.log("Collection created successfully !!!");
        db.close();
    })
})
