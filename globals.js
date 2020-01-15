/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:50:21 
 * @Last Modified by: sheikirfanbasha@gmail.com
 * @Last Modified time: 2020-01-16 04:54:12
 */
var constants = require('./constants');
var errors = require('./errors/errorcodes');
var log4js = require('log4js');
var logger = log4js.getLogger('main');
var spintext_env = process.env.SPTXT_ENV = process.env.SPTXT_ENV || constants.DEV;
var app_config = require('./config/env/' + spintext_env);
console.log('Using environment ' + spintext_env);

global.logger = logger;
global.log4js = log4js;
global.app_config = app_config;
global.constants = constants;
global.spintext_env = spintext_env;