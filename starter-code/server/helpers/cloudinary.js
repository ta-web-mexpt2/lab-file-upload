const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  // Para indicar en donde va a colocar los archivos y las llaves de accesos para la operación
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDSECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "tumblr",
  },
});

module.exports = multer({ storage });
