const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const uploader = require("../helpers/Cloudinary");

/* GET home page */
//Get posts
router.get("/", (req, res) => {
  Post.find()
    .then((res) => {
      res.status(200).json({ res });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});

//Create posts
router.post("/", uploader.single("image"), (req, res) => {
  console.log(req.files);

  const images = req.files.map((file) => file.path);

  Post.create({ ...req.body, images })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});
module.exports = router;
