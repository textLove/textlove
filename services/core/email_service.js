/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:50:09 
 * @Last Modified by: irfan.sheik@imaginea.com
 * @Last Modified time: 2020-01-16 05:12:33
 */
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(app_config.SENDGRID_API_KEY);
function sendMail(data, callback){
    try{
        const msg = data;
        sgMail.send(msg, false, callback);
    }catch(err){
        callback(err, "");
    }
}

exports.sendMail = sendMail;