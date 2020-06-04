const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = Schema({
  content: {
    type: String,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  picPath: {
    type: String,
    required: [true, "Debes mandar un path para tu foto"],
  },
  picName: {
    type: String,
    required: [true, "Debes mandar un nombre para tu foto"],
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
