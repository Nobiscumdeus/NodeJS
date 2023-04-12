var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.appendFile('demo.txt','<h1> Another appendix </h1>',function(err){
        if(err) throw err;
      console.log("Done successfully");
    })
}).listen('8082');