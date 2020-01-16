/*
 * @Author: sheikirfanbasha@gmail.com 
 * @Date: 2020-01-16 06:22:25 
 * @Last Modified by: irfan.sheik@imaginea.com
 * @Last Modified time: 2020-01-16 06:44:40
 */

 const textAnalyzer = require("../../services/nlu/text_analyzer")

module.exports = function(app) {
    app.post('/analyze', function(req, res) {
        var text = req.body.content;
        textAnalyzer.analyzeWithIBM(text, function(err, result){
            if(err){
                res.status(500);
                res.send(err);
            }else{
                res.send(result);
            }
        })
    });
}