var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');


/* GET newsfeed page. */

router.get('/', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  //NEED TO ADD ORDER BY STAMP COUNT WHEN STAMP DB IS DONE. 
  const articles = await db.Article.findAll({
    include: db.User,
  })

  const { userId } = req.session.auth;
  const user = await db.User.findByPk(userId);
  res.render('newsfeed', {
    title: articles.title,
    articles,
    user,
    csrfToken: req.csrfToken()
  });
}))

module.exports = router