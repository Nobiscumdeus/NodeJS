const express=require('express')
const ejs=require('ejs')
//const fetch=require('node-fetch')


const app=express()
const port=process.env.PORT || 8080

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



import('node-fetch').then(async(nodeFetch)=>{
    const fetch=nodeFetch.default; 
    const apiKey='9cda9b2680fd602782c9b4417a2caed2'



app.get('/weatherapp',(req,res)=>{
    res.render('weatherapp',{weatherData:null,location:null});
})


app.post('/weatherapp',async(req,res)=>{
    const location=req.body.location;
    const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try{
        const response=await fetch(weatherUrl);
        if(response.ok){
            const weatherData=await response.json();
            res.render('weatherapp',{weatherData,location})
            console.log('connected wella')
        }else{
            res.render('weatherapp',{weatherData:null,location})
            console.log('Not connected well ooo')
        }
    }catch(error){
        res.render('weatherapp',{weatherData:null,location});
        console.error(error.message)
    }
})


})
app.listen(port,()=>{
    console.log(`Server is running on port ${port} `)
})





















/** 
 * app.post('/weatherapp',(req,res)=>{
    const location=req.body.location;
    const weatherUrl='https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${9cda9b2680fd602782c9b4417a2caed2}';

    request(weatherUrl,(error,response,body)=>{
        if(!error && response.statusCode ===200){
            const weatherData=JSON.parse(body);
            res.render('weatherapp',{weatherData,location})
        }else{
            res.render('weatherapp',{weatherData:null,location});
        }
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
*/

