const EventEmitter=require('events')
const readline=require('readline')

/** 
 * Event Emiiter module
 * const eventEmitter=new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
})

eventEmitter.emit('tutorial',30,80)

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }

    get name(){
        return this._name;
    }
}

let pedro=new Person('Pedro')
pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
})

pedro.emit('name')

*/

/**
 * Readline Module
 * const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let num1=Math.floor(Math.random() *10 +1);
let num2= Math.floor(Math.random() *10 + 1);

let answer=num1 + num2
rl.question(`What is ${num1} + ${num2} ?`,(userInput)=>{
    if(userInput.trim() ==answer){
        rl.close();
    }else{
        rl.setPrompt('Incorrect response, please tru again');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() ==answer)
            rl.close()
            else{
                rl.setPrompt('Your answer is incorrect')
                rl.prompt();
            }
        })
    }
    
})
rl.on('close',()=>{
    console.log('Correct !!!')
})

 */

/**
 * File system Module
const fs=require('fs');

//Create a file
fs.writeFile('example.txt',"Chasfat projects learning NodeJS 1,2,3,4,4,4,2,2,,2",(err)=>{
    if(err)
    console.log(err);

    else
    console.log('File successfully created')
    fs.readFile('example.txt','utf8',(err,file)=>{
        if(err)
        console.log(err)
        else
        console.log(file)
    })
})

fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
    console.log(err)
    else
    console.log('successfully renamed the file')
})
fs.appendFile('example2.txt','Some data being appended',(err)=>{
    if(err)
    console.log(err)
    else
    console.log('Data append a success!')
})
fs.unlink('example2.txt',(err)=>{
    if(err)
    console.log(err)
    else
    console.log('Successfully deleted file')
})

const fs=require('fs')
fs.mkdir('tutorials',(err)=>{
    if(err)
    console.log(err)
    else{
        fs.rmdir('tutorials',(err)=>{
            if(err)
            console.log(err)
            else{
                console.log('Dete the folder')
            }
        })
    }
})

const fs=require('fs')
const zlib=require('zlib')
const gzip=zlib.createGzip(); //can help compress a file to zip 
const gunzip =zlib.createGunzip(); //can help uncompress a zip file

fs.writeFile('example.txt','Glory be to God');
const readStream=fs.createReadStream('demo.txt','utf8')
const writeStream=fs.createWriteStream('example.txt.gz',)
readStream.pipe(writeStream);
//readStream.pipe(gzip).pipe(writeStream);


//http modules
const http=require('http');
const server=http.createServer((req,res)=>{
    //request 
    if(req.url ==='/'){
        res.write('Hello world, from Chasfat Projects ')
        res.end();

    }
    else{
        res.write("Using some other domain");
        res.end();
    }
 
})

server.listen('3000');
**/
/**
 * const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    if(req.url ==='/chasfat'){
        const readStream=fs.createReadStream('demofile.html')
        res.writeHead(200,{'Content-type':'text/html'});
        readStream.pipe(res);

    }else{
        const readStream=fs.createReadStream('package.json');
        res.writeHead(200,{'Content-type':'application/json'});
        readStream.pipe(res)
    }
   

}).listen(3000)

 * const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/example',(req,res)=>{
    res.send('Hitting example route ');
})
app.get('/example/:name/:age',(req,res)=>{
    //Getting the request object to get parameters
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);

    //The query string is simply optional 

})

app.listen(3000);


 */
//Express is a web module or framework for nodejs
//body parser is mainly needed for post request
/**
 * const express=require('express')
const path=require('path')
const app=express();
const bodyParser=require('body-parser')

app.use('/public',express.static(path.join(__dirname,'family'))) //When you se app.use, then there is a middleware
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    //res.send('Hello world')
   // res.sendFile(path.join(__dirname,'family','family.html'))
   res.sendFile(path.join(__dirname,'tutorial.html'))
})

app.post('/',(req,res)=>{
    console.log(req.body);
    //databasework here
    //The Schema
    const schema=Joi.objects().keys({
        email:Joi.string().trim().email().required(),
        password:Joi.string().min(5).max(10).required()
    })
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            res.send("An error has occured")
        }
        res.send('Successfully posted data')
    })
    res.send('Succesfully posted data')
})
app.listen(3000)
const userInput={
    personalInfo:{
        streetAddress:'123498783',
        city:'kljlajs',
        state:'fl'
    },
    preferences:arrayString
}

const personalInfoSchema=Joi.objects().keys({
    streetAddress:Joi.string().trim().required(),
    city:Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required()

})

const preferencesSchema=Joi.array().items(Joi.string())

const schema=Joi.objects().keys({
    personalInfo:personalInfoSchema,
    preferences:preferencesSchema
})

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
    console.log(err)
    else
    console.log(result)
})
//Dealing with EJS templates
app.use('/public',express.static(path.join(__dirname,'views')))
app.set('view engine','ejs')
app.get('/:userQuery',(req,res)=>{
  
    res.render('index',{data:{userQuery:req.params.userQuery,
        loggedIn:true,
        username:'gloooooty',
                    searchResults:['book1','book2','book3']}})
}).listen(3000)
 */


const path=require('path')
const express=require('express')
const app=express()
const people=require('/routes/people')

app.use('people',people)
app.listen(3000)




