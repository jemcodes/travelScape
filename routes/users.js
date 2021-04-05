var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { getUserToken } = require('../auth');

const { asyncHandler, handleValidationErrors } = require('./utils');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
