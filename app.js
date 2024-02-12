const nodemailer=require('nodemailer');

//transporter

 const transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"from mail",
        pass:"your password"
    }
  })

  const info={
    from:"from mail",
    to:"to mail",
    subject:"Email application",
    text:`Welcome to my codeserver`
  }

  transporter.sendMail(info,(err,result)=>{
    if(err){
        console.log("Error in sending Mail",err);
    }
    else{
        console.log("Mail sent successfully",info);
    }
  })



