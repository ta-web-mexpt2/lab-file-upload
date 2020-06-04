const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = Schema({
  content: {
    type: String,
    required: [true, "Por favor, agrega una descripcion :3"],
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  picPath: {
    type: String,
    required: [true, "Debes agrega el path de tu foto"],
  },
  picName: {
    type: String,
    required: [true, "La foto debe tener un nombre"],
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
