const express = require("express");
const { Video } = require("../models/video");
const { Subscriber } = require("../models/subscriber");
const { Like } = require("../models/like");
const path = require("path");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const elasticsearch = require("elasticsearch");
const videoRoutes = express.Router();

const client = new elasticsearch.Client({
  host: "http://localhost:9200/",
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".mp4") {
      return cb(res.status(400).end("only mp4 file is allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

videoRoutes.post("/uploadFile", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });
    return res.json({
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
      thumbsFilePath = "uploads/thumbnails/" + filenames[0];
    })
    .on("end", function () {
      return res.json({
        success: true,
        thumbsFilePath: thumbsFilePath,
        fileDuration: fileDuration,
      });
    })
    .screenshots({
      count: 5,
      folder: "uploads/thumbnails",
      size: "320x240",
      filename: "thumbnail-%b.png",
    });
});

videoRoutes.post("/uploadVideo", (req, res) => {
  const video = new Video(req.body);
  video.save((err, video) => {
    if (err) return res.status(400).json({ success: false });
    client.index(
      {
        index: "video",
        id: video._id.toString(),
        body: req.body,
        refresh: "true",
      },
      function (err, resp, status) {
        if (err) {
          console.log("error in elastic search upload" + err);
        } else {
          console.log("elastic search upload success" + JSON.stringify(resp));
        }
      }
    );
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
  var searchResults = [];
  let reqbody = {
    query: {
      match: {
        title: req.body.searchString,
      },
    },
  };
  client.search(
    {
      index: "video",
      body: reqbody,
      size: 100,
    },
    function (err, resp, status) {
      if (err) {
        console.log("error while getting elasticsearch" + err);
      } else {
        resp.hits.hits.forEach((responseVideo) => {
          searchResults.push(responseVideo._id);
        });
        Video.find({ _id: { $in: searchResults } })
          .populate("writer")
          .exec((err, videos) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, videos });
          });
      }
    }
  );
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
