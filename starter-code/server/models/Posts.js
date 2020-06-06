const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostsSchema = Schema({
  content: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  picPath: {
    type: String,
  },
  picName: {
    type: String,
  }
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;