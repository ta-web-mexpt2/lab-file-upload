const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
const uploader = require("../helpers/cloudinary");

//Get all posts
router.get('/', (req, res) => {
    Post.find()
        .populate("creatorId", "username")
        .then((result) => {
            res.status(200).json({ result });
        })
        .catch((err) => res.status(400).json({ err }))
});


// POST / Create a post
router.post("/", uploader.single("image"), (req, res) => {
    console.log(req.file);

    const picPath = req.file.path;
    const picName = req.file.filename;

    Post.create({ ...req.body, picPath, picName })
        .then((result) => {
            res.status(200).json({ result });
        })
        .catch((err) => res.status(400).json({ err }))
})

module.exports = router;