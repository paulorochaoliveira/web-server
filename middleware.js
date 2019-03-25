var middleware = {
    requireAuthetication : function (req, res, next) {
        console.log('private rout hit');
        next();
    },
    logger : function (req, res, next) {
        console.log('Request : ' + req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
        next();
    }
};

module.exports = middleware;