var formidable=require('formidable')
var http=require('http');
var fs=require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" required/>');
    res.write('<input type="submit" />');
    res.write('</form>');
    return res.end();
}).listen('8083');

http.createServer(function(req,res){
    if(req.url=='./fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath=files.filetoupload.filepath;
            var newpath='C:/Users/HP/Desktop/nodesapp/keptfiles'+files.filetoupload.originalFilename;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write("Files uploaded and moved !")
                res.end()
            })
           // res.write("Congrats !!! file has been uploaded successfully");
            //res.end();
        })

    }else{
        res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload" required/>');
    res.write('<input type="submit" />');
    res.write('</form>');
    return res.end();

    }

})