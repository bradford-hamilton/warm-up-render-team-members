var express = require('express');
var router = express.Router();
var db = require('../db/api');

/* GET home page. */
router.get('/', function(request, response, next) {
  db.displayAll().then(function(names) {
    response.render('index', { member: names });
  });
});

module.exports = router;
