var http=require('http');
var fs=require('fs');
var url=require('url')
var event=require('events');

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
    


