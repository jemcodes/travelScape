const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');

const validateArticle = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Add a title!')
        .isLength({ max: 100 })
        .withMessage('Title must not be longer than 100 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Come on tell us a story!!!!!!!'),
    check('imageSrc')
        .isURL()
        .withMessage('Image must be a valid URL.'),
]

const articleNotFoundError = (id) => {
    const err = Error(`Article with id of ${id} must have been lost in the Bermuda Triangle!`);
    err.title = 'Article not found';
    err.status = 404;
    return err;
}

// getting single article
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    // FOR STAMPS
    const article = await db.Article.findByPk(articleId, {
        include: [db.User, db.Stamp]
    });
    // console.log(article)
    const comments = await db.Comment.findAll({
        where: {
            articleId
        },
        include: db.User,
        order: [['createdAt', 'DESC']]
    })

    const stampNum = article.Stamps.length;

    // verifying user
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);

    // console.log(res.locals.user)
    let isStamped = false
    const loggedUser = res.locals.user.id
    // console.log(loggedUser)

    article.Stamps.forEach((stamp) => {
        // console.log(stamp)
        const { userId } = stamp.dataValues;
        // console.log(userId)
        if (userId === loggedUser) {
            isStamped = true;
        }
    })

    res.render('single-article', {
        title: article.title,
        article,
        csrfToken: req.csrfToken(),
        user,
        comments,
        stampNum,
        isStamped
    })

    if (!article) {
        next(articleNotFoundError(articleId))
    }

}))

// getting your form to write article
router.get('/create', csrfProtection, asyncHandler(async (req, res, next) => {
    const article = db.Article.build();
    res.render('create-article', {
        title: 'Write An Article!',
        article,
        csrfToken: req.csrfToken()
    })
}));

// posting article
router.post('/create', csrfProtection, validateArticle, asyncHandler(async (req, res, next) => {
    const { title, content, imageSrc } = req.body;

    const article = await db.Article.build({
        title,
        content,
        imageSrc,
        userId
    });
    const validatorErrors = validationResult(req);

    // redirect to newly created article
    if (validatorErrors.isEmpty()) {
        await article.save();
        res.redirect(`articles/${article.id}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg)
        res.render('create-article', {
            title: "Write An Article!",
            content,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}));

// editing articles
router.put('/:id(\\d+)', csrfProtection, validateArticle, asyncHandler(async (req, res, next) => {
    const articleId = parseInt(req.params.id, 10);
    const article = await db.Article.findByPk(articleId);
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
        await article.update({ content: req.body.content });
        res.redirect('/:id')
    } else {
        const errors = validatorErrors.array().map((error) => error.msg)
        res.render('create-article', { title: "Write An Article!", content, errors, csrfToken: req.csrfToken() })
    }
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const articleId = parseInt(req.params.id, 10);
    const article = await db.Article.findByPk(articleId);

    if (article) {
        await article.destroy();
        res.status(204).end();
    } else {
        next(articleNotFoundError(articleId));
    }
    // MAY NEED TO BE REVISITED
    res.redirect('/newsfeed') // OR PROFILE ROUTE
}));

router.post('/:id(\\d+)/stamps', asyncHandler(async (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth;
    // console.log(articleId)
    // console.log(userId)

    const stamp = await db.Stamp.findOne({
        where: { articleId, userId }
    })
    if (!stamp) {
        await db.Stamp.create({
            articleId,
            userId
        })
        res.json({ status: true });
    } else {
        stamp.destroy()
        res.json({ status: false })
    }
}))

// router.patch('/articles/:id(\\d+)', (req, res) => {
//     db.Stamp.score += 1;
//     res.json({ score: stamp.score });
// });

// router.patch('/articles/:id(\\d+)', (req, res) => {
//     stamp.score -= 1;
//     res.json({ score: stamp.score });
// });

// content and pictures
// LIKES

module.exports = router;

