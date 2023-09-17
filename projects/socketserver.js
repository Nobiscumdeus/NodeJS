const express=require('express')
const http=require('http')
const WebSocket=require('ws')

const app=express()
const server=http.createServer(app)
const wss=new WebSocket.Server({server});

//serve static files from a public folder 
app.use(express.static('public'))

wss.on('connection',(ws)=>{
    console.log('Client connected successfully with web socket')

    ws.on('message',(message)=>{
        //Broadcase the mnessage to all connected clients 
        wss.clients.forEach((client)=>{
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    });

    ws.on('close',()=>{
        console.log('Client disconnected');
    })
})

//Serve your HTML and css files here 

server.listen(3000,()=>{
    console.log('WebSocket server is running already...')
})