exports.isLoggedIn = (req, res, next) => {
    if(req.isAutheticated()){
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

exports.inNotLoggedIn = (req, res, next) => {
    if(req.isAutheticated()){
        next();
    } else {
        res.redirect('/');
    }
};