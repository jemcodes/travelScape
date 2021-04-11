var express = require('express');
var router = express.Router();

const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const { loginUser, logoutUser } = require('../auth');
const { asyncHandler, csrfProtection } = require('./utils');

/************************************** REQUIRED STUFF DONT TOUCH *******************************************************/

const userValidators = [
  check('pen_name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Pen Name.')
    .isLength({ max: 20 })
    .withMessage('Pen Name cannot have more than 20 characters.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.')
    .isLength({ max: 50 })
    .withMessage('Email cannot have more than 50 characters.')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
]

// login Validator
const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
];



// GET for signup
router.get('/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('sign-up', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  })
});

//User signing Up
router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      pen_name,
      email,
      password
    } = req.body;

    const user = await db.User.build({
      pen_name,
      email,
    });
    // console.log(user)
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPW = await bcrypt.hash(password, 10);
      user.hashedPW = hashedPW;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/newsfeed');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('sign-up', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));


// RENDERING log in page
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  res.render('log-in', {
    title: 'Log In',
    csrfToken: req.csrfToken(),
  });
}));

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      // Attempt to get the user by their email address.
      const user = await db.User.findOne({ where: { email } });

      if (user !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, user.hashedPW.toString());

        if (passwordMatch) {
          // If the password hashes match, then login the user
          // and redirect them to the default route.
          loginUser(req, res, user);
          // console.log("inside the LOGIN ROUTE!")
          // console.log(res.session.auth.userId)
          return res.redirect('/newsfeed');
        }
      }

      // Otherwise display an error message to the user.
      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('log-in', {
      title: 'Login',
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});

router.get('/demo', asyncHandler(async (req, res) => {
  req.session.auth = { userId: 1 };
  res.redirect('/newsfeed');
}))

// CHANGE TO HOME PAGE

module.exports = router;
