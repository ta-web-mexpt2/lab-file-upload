const express = require('express');
const router  = express.Router();

const uploaded= require ("../helpers/cloudinary")

/* GET home page */
router.get('/', (req, res, next) => {
  res.status(200).json({message:"estas listo para la accion"});

 
});

router.post("/", uploaded.single("image"), (req,res)=>{
    
     const image = req.files.map( file=>file.path)
     User.create({...req.body, image})
        .then( result=>res.status(200).json({result}))
        .catch ( err => console.log(err, "error"))
 })

module.exports = router;
