var express = require('express');
var router = express.Router();
var path = require('path');

/* GET index.html page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
  //res.send('hi');
});

module.exports = router;
