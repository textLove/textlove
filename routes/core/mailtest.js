/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:50:58 
 * @Last Modified by: irfan.sheik@imaginea.com
 * @Last Modified time: 2020-01-16 05:16:43
 */
const emailService = require('../../services/core/email_service'); 
module.exports = function(app) {
    app.post('/mailtest', function(req, res) {
        var data = req.body;
        emailService.sendMail(data, function(err, result){
            if(err){
                res.send("Error in sending email: ", err);
            }else{
                res.send("Successfully sent the email");
            }
        })
    });
}