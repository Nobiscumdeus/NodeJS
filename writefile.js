var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.open('demo.txt','w',function(err,file){
        if(err) throw err;
        console.log('Done and Saved');
    })
}).listen('8080');