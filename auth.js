const { User } = require('./db/models');

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    }
    // console.log(req.session.auth)
}

const logoutUser = (req, res) => {
    delete req.session.auth;
    // console.log("inside logout!", req.session.auth)
}

const requireAuth = (req, res, next) => {
    // console.log(res.locals.authenticated);
    try {
        if (!res.locals.authenticated) {
            return res.redirect('/users/login');
        }
        return next();
    } catch (e) {
        next(e)
    }
}

const restoreUser = async (req, res, next) => {
    // console.log("in restore!", req.session);

    if (req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await User.findByPk(userId)

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next()
    }
};

module.exports = {
    restoreUser,
    loginUser,
    logoutUser,
    requireAuth
}