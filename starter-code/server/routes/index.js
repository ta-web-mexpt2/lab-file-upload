const express = require('express');
const router  = express.Router();
const Post = require("../Models/Post");
const uploader = require("../Helpers/cloudinary");

/* GET home page */
router.get("/", (req, res) => {
  Post.find()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json({ err }));
});

router.post("/", uploader.single("image"), (req, res) => {
  
  console.log(req.files);
  const image = req.file.map(file => file.path)
  
  Post.create({...req.body, image})
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => res.status(400).json({ err }));
});

module.exports = router;
