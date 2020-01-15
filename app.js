/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:51:26 
 * @Last Modified by:   sheikirfanbasha@gmail.com 
 * @Last Modified time: 2020-01-16 04:51:26 
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// load globals
var gloabls = require('./globals');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31536000 }));

// handle headers
var seqNum = 1;
app.use(function (req, res, next) {
    var origin = req.headers.origin;
    var allowedOrigins = app_config.ACCESS_CONTROL_ALLOWED_ORIGINS;
    if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       res.setHeader('Access-Control-Allow-Headers', 'Cache-Control, Origin, X-Requested-With, Content-Type, Accept, Authorization, Key, x-user-id, x-channel-id, x-app-id');
       res.setHeader('Access-Control-Allow-Credentials', true);
    }

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        req.seqStr = 'For req ' + (seqNum++) + ',';
        next();
    }
});


require('./routes')(app);

// catch 404 and forward to error handler
console.log("------------------------------------", path.join(__dirname, '..', 'apidoc'))
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (process.env.SPTXT_ENV != 'PROD') {
    app.use(function(err, req, res, next) {
        logger.error(err, err.status);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    logger.error(err, err.status);
    if((err.status || 500) == 500){
        
        err = new Error('Something went wrong!');
    }
    res.render('error', {
        message: err.message,
        error: {}
    });
})

var options = {
    // server: {
    //     socketOptions: {
    //         keepAlive: 1
    //     }
    // },
    // replset: {
    //     socketOptions: {
    //         keepAlive: 1
    //     }
    // },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    poolSize: 10, 
    keepAlive: true,
    connectTimeoutMS : 60000
};

if(app_config.pool_size){
    options.poolSize = app_config.pool_size;//setting the env specific poolsize
}

mongoose.connect(app_config.mongo_core_server+'/'+app_config.mongo_spotcues_db, options);

module.exports = app;