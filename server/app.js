const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path=require("path");
const fs=require("fs");
require("dotenv").config();

const app = express();

const dir = path.join(__dirname,"../uploads");
const subDirectory = path.join(__dirname,"../uploads/thumbnails");

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    fs.mkdirSync(subDirectory)
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/video", require("./routes/videoRoutes"));
app.use("/api/subscribe", require("./routes/subscribeRoutes"));
app.use("/api/comment", require("./routes/commentRoutes"));
app.use("/api/like", require("./routes/like"));

app.use("/uploads", express.static("uploads"));


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started at ${port}...`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"client","build","index.html"));
  });
}
