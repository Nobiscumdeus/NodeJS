var fs=require('fs')
var rs=fs.createReadStream('./demofile.html');
rs.on('open',function(){
    console.log("The file has been opened ");
});

//other events using the EventEmitter() method and firing it with the emit() method 
var events=require('events')
var eventemitter=new events.EventEmitter()

//create an event handler 
var myEventhandler=function(){
    console.log("I hear a scream");
}

//Assign the event handler to an event 
eventemitter.on('scream',myEventhandler);

eventemitter.emit('scream');