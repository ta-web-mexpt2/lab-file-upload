const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostSchema = Schema({
    content: {
        type: String,
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Post must have a creator"]
    },
    picPath: {
        type: String,
        required: [true, "Where's the image?"]
    },
    picName: {
        type: String,
        required: [true, "Image must have a name"]
    }
});

const User = mongoose.model('Post', PostSchema);

module.exports = Post;