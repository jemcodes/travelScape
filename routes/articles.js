const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');

const validateArticle = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Add a title!')
        .isLength({ max: 100 })
        .withMessage('Title must not be longer than 100 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Come on tell us a story!!!!!!!'),
]

const articleNotFoundError = (id) => {
    const err = Error(`Article with id of ${id} must have been lost in the Bermuda Triangle!`);
    err.title = 'Article not found';
    err.status = 404;
    return err;
}

// GETTING one single article
router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
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
    // console.log('banana')
    // console.log(req.csrfToken())
    // console.log(stampNum);
    res.render('single-article', {
        title: article.title,
        article,
        csrfToken: req.csrfToken(),
        user,
        comments,
        stampNum,
        isStamped,
        userId
    })

    if (!article) {
        next(articleNotFoundError(articleId))
    }

}))

const commentValidators = [
    check('comment')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid input')
        .isLength({ max: 255 })
        .withMessage('Your comment cannot be longer than 255 characters.')
]

// POSTING COMMENTS
router.post('/:id(\\d+)/comments', csrfProtection, commentValidators, asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);
    // console.log('jslkdf3453te')
    const articleId = req.params.id
    const article = await db.Article.findByPk(articleId, {
        include: db.User
    });

    const { comment } = req.body
    const elements = await db.Comment.create({
        userId: res.locals.user.id,
        articleId,
        content: comment,
    })
    const comments = await db.Comment.findAll({
        where: { articleId }
    })

    res.json({ elements, user });
    // res.send(comments);
}))

// GETTING create article form
router.get('/create', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
    // const article = await db.Article.build();
    const { userId } = req.session.auth
    const user = await db.User.findByPk(userId)
    res.render('create-article', {
        title: 'Write An Article!',
        // article,
        user,
        csrfToken: req.csrfToken()
    })
}));

// POSTING AN ARTICLE
router.post('/create', csrfProtection, validateArticle, asyncHandler(async (req, res, next) => {
    const { title, content, imageSrc } = req.body;
    const { userId } = req.session.auth
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
        res.redirect(`/articles/${article.id}`)
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

// EDITING AN ARTICLE
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

//Deleting an article 
router.post('/:id(\\d+)/delete', asyncHandler(async (req, res, next) => {
    const articleId = parseInt(req.params.id, 10);
    const article = await db.Article.findByPk(articleId);
    // console.log("THIS IS THE ARTICLE",article)
    if (article) {
        await article.destroy();
        res.status(204).end();
    } else {
        next(articleNotFoundError(articleId));
    }
    // MAY NEED TO BE REVISITED
    res.redirect('/newsfeed') // OR PROFILE ROUTE
}));

// POSTING A STAMP ON AN ARTICLE
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

