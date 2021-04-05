var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { check } = require('express-validator');
const db = require('../db/models');
const { getUserToken } = require('../auth');

const { asyncHandler, handleValidationErrors, csrfProtection } = require('./utils');



const validateUserName =
  check('pen_name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Pen Name.')
    .isLength({ max: 20 })
    .withMessage('Pen Name cannot have more than 20 characters.')
  ;

const validateEmailAndPassword = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.')
    .isLength({ max: 50 })
    .withMessage('Email cannot have more than 50 characters.'),

  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.')
]

// GET for signup
router.get('/sign-up', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = db.User.build();
  res.render('sign-up', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  })
}));

//User signing Up
router.post('/', validateUserName, validateEmailAndPassword, handleValidationErrors, asyncHandler(async (req, res) => {
  const { pen_name, email, password } = req.body;
  const hashedPW = await bcrypt.hash(password, 10)

  const user = await db.User.create({
    pen_name,
    email,
    hashedPW
  });

  const token = getUserToken(user)
  res.status(201).json({
    user: { id: user.id },
    token
  })
}));


// GET for log in
router.get('/log-in', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = db.User.build();
  res.render('log-in', {
    title: 'Log In',
    user,
    csrfToken: req.csrfToken(),
  })
}));

//User Logging in
router.post(
  '/token',
  validateEmailAndPassword,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({
      where: {
        email
      }
    })
    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed")
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."]
      return next(err)
    }
    const token = getUserToken(user)
    res.json({ token, user: { id: user.id } })
  })
)

module.exports = router;
