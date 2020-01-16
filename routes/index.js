/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:51:03 
 * @Last Modified by: irfan.sheik@imaginea.com
 * @Last Modified time: 2020-01-16 06:31:38
 */
var express = require('express');
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send("Hello World!")
    });
    app.get('/ping', function(req, res) {
        res.send("Pong")
    });
    require('./core/hashtag')(getRouterInstance(app));
    require('./core/mailtest')(getRouterInstance(app));
    require('./core/text_analysis')(getRouterInstance(app));
};

function getRouterInstance(app) {
    var router = express.Router();
    app.use(router);
    return router;
}