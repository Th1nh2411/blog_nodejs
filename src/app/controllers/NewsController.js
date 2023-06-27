class NewsController {
    index(req, res) {
        res.render('news');
    }
    detail(req, res) {
        res.send('DETAIL NEWS');
    }
}
module.exports = new NewsController();
