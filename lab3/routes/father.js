﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('father', { name: 'Pinakin Bhai', comment: 'He is the best father. Hey Pullio.' });
});

module.exports = router;