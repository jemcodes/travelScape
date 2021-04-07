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

     console.log(user.PenPals)
    if (user) {
        console.log(user);
        res.render('profile', { user, csrfToken: req.csrfToken() })

    } else {
        next(profileNotFoundError(userId));
    }
}))

module.exports = router;