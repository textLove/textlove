var express = require('express');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send("Hello World!")
    });
    app.get('/ping', function(req, res) {
        res.send("Pong")
    });
    require('./core/hashtag')(getRouterInstance(app));
};

function getRouterInstance(app) {
    var router = express.Router();
    app.use(router);
    return router;
}