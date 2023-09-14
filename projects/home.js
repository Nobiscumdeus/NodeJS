const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Node Project 1 : Hello world ')
})

server.listen(8080,'localhost',()=>{
    console.log("Server running at port 8080 already")
})