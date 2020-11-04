const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Started at ${port}...`);
});
