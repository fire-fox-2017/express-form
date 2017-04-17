var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{first_name: req.query.first_name, last_name: req.query.last_name});
});

module.exports = router;
