﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { name: 'Purva', comment: 'I am Mad' });
});

module.exports = router;