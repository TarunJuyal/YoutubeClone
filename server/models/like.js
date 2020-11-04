const mongoose = require("../db/mongoConnection");
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    videoId: { type: Schema.Types.ObjectId, ref: "Video" },
    commentId: { type: Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);
module.exports = { Like };
