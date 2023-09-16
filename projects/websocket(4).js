const express=require('express')
const http=require('http')
const WebSocket=require('ws')

const app=express();

const server=http.createServer(app);
const wss=new WebSocket.Server({server})

app.get('/chat',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        //Broadcast the received message to all connected clients
        wss.clients.forEach((client)=>{
            if(client!== ws && client.readyState === WebSocket.OPEN)
            client.send(messsage);
        })
    })
})

server.listen(8080,()=>{
    console.log(`Chat app with Web socket running at 8080 `)
})