const nodemailer = require("nodemailer");
const { google }=require("googleapis");
const registrationCompletion = require("./templates/registrationMail");
const forgetPasswordMail = require("./templates/forgetPasswordMail");
require("dotenv").config();

const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
     process.env.clientId,
     process.env.clientSecret, 
     "https://developers.google.com/oauthplayground" 
);
  oauth2Client.setCredentials({
     refresh_token:process.env.refreshToken
});
const accessToken =  oauth2Client.getAccessToken();

function sendMail(name, email, password,resetPasswordToken) {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port:465,
      secure:true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken:process.env.refreshToken,
        accessToken:accessToken,
        expires: 3599
      },
      tls: {
         rejectUnauthorized: false
      }
    });
    let mailOptions={};
    if(resetPasswordToken){
     mailOptions = {
      from: "' MyTube '<process.env.EMAIL>",
      to: email,
      subject: "Password Reset",
      html: forgetPasswordMail(name,resetPasswordToken),
    };
    }else{
    mailOptions = {
      from: "' MyTube '<process.env.EMAIL>",
      to: email,
      subject: "Registration Completed SuccessFully",
      html: registrationCompletion(name, email, password),
    };
    }
    // Send the Mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Mail Send Error ", error);
      } else {
        console.log(
          "Registration confirmation has been send to Your Mail Id " + email
        );
      }
    });
  });
}
module.exports = sendMail;
