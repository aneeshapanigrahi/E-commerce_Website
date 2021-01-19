const router = require("express").Router();
const User = require('../models/user');
const { ensureAuthenticated } = require('../config/auth');

//Entry page
router.get('/', (req, res) => res.send('Welcome'));

//Home page
router.get('/home', ensureAuthenticated, (req, res) => res.send('Home'));

module.exports = router;
