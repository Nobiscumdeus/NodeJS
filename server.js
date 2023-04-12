var http=require('http');
var dt=require('./one.js');
var url=require('url')
http.createServer(function(req,res){
   // res.writeHead(200,{'Content-Type':'text/plain'});
   res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are currently: "+ dt.myDateTime() + "<br/>")
   // res.write(req.url)
   var q=url.parse(req.url,true).query;
   var txt=q.year + " " + q.month;
   res.end(txt);

   // res.end('You are highly welcome to Server built by Chasfat project$')
  //res.end();

}).listen(8080);