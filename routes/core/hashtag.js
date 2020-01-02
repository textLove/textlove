module.exports = function(app) {
    app.get('/hashtags', function(req, res) {
        res.send("List of hashtags")
    });
}