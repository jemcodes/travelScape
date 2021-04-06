var express = require('express');
var router = express.Router();
const { csrfProtection } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection, (req, res) => {
  // res.render('index', { title: 'a/A Express Skeleton Home' });
  res.render('gatewall', {
    csrfToken: req.csrfToken(),
  })
});

router.get('/newsfeed', csrfProtection, (req, res) => {
  // res.render('index', { title: 'a/A Express Skeleton Home' });
  res.render('newsfeed', {
    csrfToken: req.csrfToken(),
  })
});
// MUST CHANGE TO ROUTES FOLDER ^^^^


module.exports = router;
