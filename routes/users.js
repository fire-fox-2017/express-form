var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('hello '+ req.query.say);
  res.render('users', {firstname: req.query.firstname || "John", lastname: req.query.lastname || "Doe"});
});

router.get('/create', function(req, res, next) {
  res.render('users', {firstname: req.query.firstname || "John", lastname: req.query.lastname || "Doe"});
});

module.exports = router;
