const mongoose = require("../db/mongoConnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const saltRounds = 10;

const userSchema = mongoose.Schema({
  firstName: { type: String, maxlength: 20 },
  email: { type: String, unique: 1, trim: true },
  password: { type: String, minlength: 8 },
  lastName: { type: String, maxlength: 20 },
  token: { type: String },
  tokenExp: { type: Number },
  role: { type: Number, default: 0 },
  image: { type: String },
  resetPasswordToken:{type:String},
  resetPasswordTokenExp:{type:Number},
});

userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  let user = this;
  let token = jwt.sign(user._id.toHexString(), "secret");
  let oneHour = moment().add(1, "hour").valueOf();
  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.methods.generateResetToken = function (cb) {
  let user = this;
  let token = jwt.sign(user._id.toHexString(), "secret");
  let tokenExp = moment().add(5, "minutes").valueOf();
  user.resetPasswordTokenExp = tokenExp;
  user.resetPasswordToken = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;
  jwt.verify(token, "secret", function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.statics.findResetToken = function (token, cb) {
  var user = this;
  jwt.verify(token, "secret", function (err, decode) {
    user.findOne({ _id: decode, resetPasswordToken: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
