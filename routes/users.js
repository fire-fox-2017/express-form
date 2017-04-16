var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let queryString = req.query.say;
  res.render('users', {title: 'Users', query: queryString});
});

router.post('/', function(req, res, next) {
  let result = req.body.users.toLowerCase();
  res.render('users', {title: 'Users', result: result});
});

module.exports = router;
