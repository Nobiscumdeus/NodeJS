var http=require('http');
//fs is the file system
/**
 * The file system can read,update,rename,delete,create files on your computer
 */
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('demofile.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8081)

/**
 * Other filesystem functions are:
 * fs.appendFile --Adds content to the end of the file 
 * fs.open
 * fs.writeFile --replaces the specified file and its content
 * fs.unlink ---deletes the specified file 
 */