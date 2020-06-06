const express    = require('express');
const passport   = require('passport');
const router     = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
// remember to require the User model
const User = require('../models/User');

// check this http status codes https://www.restapitutorial.com/httpstatuscodes.html
router.get('/login', ensureLoggedOut(), (req, res) => {
    res.status(307).json({ message:'not loggedOut'});// you can change this 
});

router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : '/',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/signup', ensureLoggedOut(), (req, res) => {
    res.status(401).json({ message:'error  Unauthorized'}); //you can change this
});

router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup',
  failureFlash : true
}));

router.get('/profile', ensureLoggedIn('/login'), (req, res) => {
    res.status(200).json({  user : req.user}); //this return the user 
});

router.get('/logout', ensureLoggedIn('/login'), (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;

