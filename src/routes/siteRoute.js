var express = require('express');
var app = express();
var router = express.Router();
var SiteController = require('../app/controllers/SiteController');

router.use('/search', SiteController.search);
router.use('/', SiteController.index);

module.exports = router;
