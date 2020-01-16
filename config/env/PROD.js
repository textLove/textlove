/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:50:31 
 * @Last Modified by: irfan.sheik@imaginea.com
 * @Last Modified time: 2020-01-16 06:11:42
 */
//Server
exports.PORT = process.env.PORT || 443;

// server url
exports.SERVER = 'https://arcane-headland-47688.herokuapp.com/';

//DB
exports.mongo_core_server = 'mongodb://localhost';
exports.mongo_spotcues_db = 'spintext';

// Allowed Origins
exports.ACCESS_CONTROL_ALLOWED_ORIGINS = [
    'https://arcane-headland-47688.herokuapp.com/'
];

// Mail related
exports.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

// NLU/NLP related
exports.IBM_API_KEY = process.env.IBM_API_KEY;

exports.NLU_IBM = {
    version: "2019-07-12"
}