var http=require('http');
var fs=require('fs');
var url=require('url')
var event=require('events');

/** 
 * http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
    fs.readFile(filename,function(err,data){
      if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1> 404 error - page not found ");
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      return res.end();
    })


}).listen('8000');

*/
/*

var server=http.createServer(function(req,res){
    console.log('Request was made: '+ req.url +'home');
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream =fs.createReadStream(__dirname + '/home.html','utf-8');
    myReadStream.pipe(res)
})

server.listen(3000,'127.0.0.1');
console.log('Congrats !!!, now listening to port 3000');
*/

    function renderHTML(path,response){
        fs.readFile(path,null,function(error,data){
            if(error){
                response.writeHead(404);
                response.write("File not found");
            }else{
                response.write(data);
            }
            response.end();
        })
    }
    module.exports={
        handleRequest:function(request,response){
            response.writeHead(200,{'Content-Type':'text/html'});
    
            var path=url.parse(req.url).pathname;
            switch(path){
                case '/':
                    renderHTML('./index.html',response)
                    break;
                case '/home':
                    renderHTML('./home.html',response)
                    break;
                case '/text':
                    renderHTML('../demo.txt',response)
                    break;
                default:
                    response.writeHead(404)
                    response.write('Ooops!!! Route not well defined');
                    response.end();
            }
        }
    }
    


