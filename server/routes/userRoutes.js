const express = require("express");
const { User } = require("../models/user");
const { auth } = require("../middleware/auth");
const sendMail = require("../utils/mail");
const userRoutes = express.Router();

userRoutes.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    sendMail(
      `${req.body.firstName} ${req.body.lastName}`,
      req.body.email,
      req.body.password
    );
    return res.status(200).json({ success: true, userData: doc });
  });
});

userRoutes.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Incorrect Email",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "Incorrect Password",
        });
      } else {
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err);
          res.cookie("user_authExp", user.tokenExp);
          res
            .cookie("user_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      }
    });
  });
});

userRoutes.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    role: req.user.role,
    image: req.user.image,
  });
});

userRoutes.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

userRoutes.post("/getUser",(req,res)=>{
  User.find({_id:req.body.userId},(err,user)=>{
    if (err) return res.json({ success: false, err });
     return res.status(200).json({ success: true, user });
  });
})

userRoutes.post("/forgotPassword", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        success: false,
        message: "Ooops....User Not Found!!",
      });
    }
    user.generateResetToken((err, user) => {
          if (err) return res.status(400).send(err);
          sendMail(
           `${user.firstName} ${user.lastName}`, 
             user.email,
            user.password,
            user.resetPasswordToken
          );
          res.status(200).json({ success: true, message:`Reset Password Mail sent to ${user.email}` });
        });
});
});

userRoutes.post("/reset", (req, res) => {
    User.findResetToken(req.body.resetPasswordToken,(err, user) => {
          if (err) return res.status(400).send(err);
          if (!user) return res.json({ success: false, message:"Link invalid or expired !!"});
          user.password=req.body.password;
          user.resetPasswordToken=null;
          user.resetPasswordTokenExp=null;

          user.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({ success: true, message:`Password has been updated. Go back and login again.` });
        });
   });
});

module.exports = userRoutes;
