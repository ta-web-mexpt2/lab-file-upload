const express = require('express');
const router = express.Router();
const User = require("../models/User");
const uploader = require("../helpers/cloudinary");

//Get all users
router.get('/', (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).json({ result });
        })
        .catch((err) => res.status(400).json({ err }))
});


// POST / Create a user
router.post("/", uploader.single("profilePic"), (req, res) => {
    console.log(req.file);

    const profilePic = req.file.path;

    User.create({ ...req.body, profilePic })
        .then((result) => {
            res.status(200).json({ result });
        })
        .catch((err) => res.status(400).json({ err }))
})

module.exports = router;