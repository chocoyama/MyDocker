var express = require('express');
var router = express.Router();
var service = require('../service/count_service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/countup', function(req, res, next) {
  service.countUp().then(result => {
    service.fetch().then(result => {
      res.send(result);
    }).catch(err => {
      res.send(err);
    });
  }).catch(err => {
    res.send(err);
  });
});

module.exports = router;
