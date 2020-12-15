require("dotenv").config();

function forgetPasswordMail(name,resetPasswordToken) {
  let message = `<h1>${name} </h1>
    <pre>
    You are receiving this mail because you (or someone else) have requested reset of password for your account.
    Please click on the below link or paste thius into your browser to complete the process within 5 minutes of receiving this mail
    
    Reset link: ${process.env.domain}reset/${resetPasswordToken}

    If you didn't request this, please ignore this and your password will remain unchanged.
    </pre>`;
  return message;
}
module.exports = forgetPasswordMail;
