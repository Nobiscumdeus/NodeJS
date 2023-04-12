var nodemailer=require('nodemailer')
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'you@gmail.com',
        password:'yourpassword'
    }
});

var mailOptions={
    from:'youemail@gmail.com',
    to:'johnakinkunmi@gmail.com,faladeifeoluwa@gmail.com',
    subject:'Sending email from NodeJS',
    //text:'That was easy sending email with NodeJS',
    html:'<h3>It was indeed easy trying to send mail with NodeJS</h3><p>NodeJS is a javascript backend framework</p>'

}

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: '+ info.response)
    }
})