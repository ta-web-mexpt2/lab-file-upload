const express = require('express');
const router  = express.Router();
const Posts = require('../models/Posts');
const uploader = require('../helpers/cloudinary')

router.get('/', (req, res) => {
  Posts.find()
  .then(result => {
    res.status(200).json({ result });
  })
  .catch(err=> res.status(400).json({ err }));
});

router.post('/', uploader.array("image"), (req,res) => {
  // aqui se podrá ver el url en la terminal siempre que se use el array, si usas uploader.single se coloca en req.file
  console.log(req.files);
  // obtener unicamente el url 
  const images = req.files.map((file) => file.path);
  // res.json(req.body);

  Posts.create({ ...req.body, images }).then((result) => {
    res.status(200).json({ result });
  });
});

module.exports = router;
