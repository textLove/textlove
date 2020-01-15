/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 04:50:58 
 * @Last Modified by:   sheikirfanbasha@gmail.com 
 * @Last Modified time: 2020-01-16 04:50:58 
 */
module.exports = function(app) {
    app.get('/hashtags', function(req, res) {
        res.send("List of hashtags")
    });
}