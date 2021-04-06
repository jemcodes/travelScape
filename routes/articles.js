const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');

router.get('/', csrfProtection, asyncHandler (async (req, res, next) => {
    res.render('articles', {title: 'Read Articles'});
}))

router.get('/create', csrfProtection, asyncHandler (async (req, res, next) => {
    res.render('create-article', {title: 'Write An Article!'})
}));

router.post('/create', csrfProtection, asyncHandler(async (req, res, next) => {
    const { content } = req.body;

    const article = await db.Article.build({
        content
    });
}));


// content and pictures
// posting/creating
// editing
// deleting

// LIKES

module.exports = router;

