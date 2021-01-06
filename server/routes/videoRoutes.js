const express = require("express");
const { Video } = require("../models/video");
const { Subscriber } = require("../models/subscriber");
const { Like } = require("../models/like");
const path = require("path");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const fs=require("fs");
const videoRoutes = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return cb({wrongType:"Only .mp4 file type is allowed"}, false);
    }
    cb(null, true);
  },}).single("file");

videoRoutes.post("/uploadFile", (req, res) => {
  const dir = "../uploads"
  const subDirectory = "../uploads/thumbnails"
  if (!fs.existsSync(dir)){
    console.log("created upload folder");
    fs.mkdirSync(dir);
    fs.mkdirSync(subDirectory)
}
  upload(req, res, (err) => {
    console.log(err);
    if (err && err.wrongType) {
      return res.json({typeConflict:true,message:err.wrongType });
    }
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

videoRoutes.post("/thumbnail", (req, res) => {
  ffmpeg.setFfmpegPath("C:\\ffmpeg\\bin\\ffmpeg.exe");
  ffmpeg.setFfprobePath("C:\\ffmpeg\\bin\\ffprobe.exe");
  let thumbsFilePath = "",
    fileDuration = "";
  ffmpeg.ffprobe(req.body.filePath, (err, metadata) => {
    if (err) return res.send(err);
    fileDuration = metadata.format.duration;
  });

  ffmpeg(req.body.filePath)
    .on("filenames", function (filenames) {
      thumbsFilePath = "uploads/thumbnails/" + filenames[1];
    })
    .on("end", function () {
      return res.json({
        success: true,
        thumbsFilePath: thumbsFilePath,
        fileDuration: fileDuration,
      });
    })
    .screenshots({
      count: 3,
      folder: "uploads/thumbnails",
      size: "320x240",
      filename: "thumbnail-%b.png",
    });
});

videoRoutes.post("/uploadVideo", (req, res) => {
  const video = new Video(req.body);
  video.save((err, video) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true });
  });
});

videoRoutes.get("/getVideos", (req, res) => {
  Video.find()
    .populate("writer")
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, videos });
    });
});

videoRoutes.post("/getVideo", (req, res) => {
  Video.findOne({ _id: req.body.videoId })
    .populate("writer")
    .exec((err, video) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, video });
    });
});

videoRoutes.post("/getSubscriptionVideos", (req, res) => {
  Subscriber.find({ userFrom: req.body.userFrom }).exec((err, subscribedTo) => {
    if (err) return res.status(400).send(err);
    let subscribedUsers = [];
    subscribedTo.map((user, index) => {
      subscribedUsers.push(user.userTo);
    });
    Video.find({ writer: { $in: subscribedUsers } })
      .populate("writer")
      .exec((err, videos) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, videos });
      });
  });
});

videoRoutes.post("/search", (req, res) => {
    Video.find({"$text":{"$search":req.body.searchString}}).populate("writer").exec((err,videos)=>{
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, videos });
    })
});

videoRoutes.post("/getLikedVideos", (req, res) => {
  Like.find({ userId: req.body.userId }).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    let likedVideos = [];
    likes.map((like, index) => {
      if (like.videoId) {
        likedVideos.push(like.videoId);
      }
    });
    Video.find({ _id: { $in: likedVideos } })
      .populate("writer")
      .exec((err, videos) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, videos });
      });
  });
});

videoRoutes.post("/getUserVideos", (req, res) => {
    Video.find({ writer:req.body.writer })
      .populate("writer")
      .exec((err, videos) => {
        if (err) return res.status(400).json({ success: false, err });;
        return res.status(200).json({ success: true, videos });
      });
  });
module.exports = videoRoutes;
