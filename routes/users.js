var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/katakan', function(req, res){
    res.send('Response send to client :'+req.query.say);
});

router.get('/', function(req, res, next) {
  res.render('users_form');
});
router.post('/', function(req, res, next) {
  res.send(req.body.name.toLowerCase());
});

module.exports = router;
