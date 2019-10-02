'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('sibling', { name: 'Karan and Sweetu', comment: 'Nothing to say about them ;)' });
});

module.exports = router;