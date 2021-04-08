const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  res.render('stamps-temp')
}));

module.exports = router;