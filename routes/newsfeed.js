var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');


/* GET newsfeed page. */

router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
  //NEED TO ADD ORDER BY STAMP COUNT WHEN STAMP DB IS DONE. 
  const articles = await db.Article.findAll()
  res.render('newsfeed', { title: 'Read Articles', articles, csrfToken: req.csrfToken() });
}))

module.exports = router