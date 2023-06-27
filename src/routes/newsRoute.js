var express = require('express');
var app = express();
var router = express.Router();
var newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.detail);
router.use('/', newsController.index);

module.exports = router;
