var express = require('express');
var router = express.Router();

const db = require('../db/models');
const {User, Article, PenPal} = db
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth');
const { asyncHandler, csrfProtection } = require('./utils');

const profileNotFoundError = (id) => {
    const err = Error('User profile not found');
    err.title = 'Profile not found =(';
    err.status = 404;
    return err;
}

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    // const user = await User.findOne({ 
    //     where: userId , 
    //     include: PenPal 
    //  });
    const user = await User.findByPk(userId, {
        include: [{
            model: User,
            as: 'followers'
        }]})
        const penPalCount = user.followers.length
     console.log(user)
    if (user) {
        console.log(user);
        res.render('profile', { user, csrfToken: req.csrfToken(), penPalCount })

    } else {
        next(profileNotFoundError(userId));
    }
}))

router.get('/:id(\\d+)/penpals', csrfProtection, asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    // const user = await User.findOne({ 
    //     where: userId , 
    //     include: PenPal 
    //  });
    const user = await User.findByPk(userId, {
        include: [{
            model: User,
            as: 'followers'
        }]})
    //  const penpals = user.followers.map(user => user.pen_name)
    if (user) {
        res.render('penPals', { user, csrfToken: req.csrfToken() })
    } else {
        next(profileNotFoundError(userId));
    }
}))

module.exports = router;