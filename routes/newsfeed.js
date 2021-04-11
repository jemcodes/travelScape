var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { requireAuth } = require('../auth');

/* GET newsfeed page. */
router.get('/', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
  // console.log("hello", req.session.auth)
  // console.log(req.session.auth.userId)

  const loggedIn = req.session.auth.userId;
  // console.log("inside /NEWSFEED", loggedIn)

  const articles = await db.Article.findAll({
    include: db.User,
    order: [['createdAt', 'DESC']]
  })

  const { userId } = req.session.auth;
  const user = await db.User.findByPk(userId);
  res.render('newsfeed', {
    title: articles.title,
    articles,
    user,
    csrfToken: req.csrfToken(),
    loggedIn
  });
}))

module.exports = router