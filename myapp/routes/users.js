var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {firstname: req.query.firstname || 'Ambo', lastname: req.query.lastname || 'Dalle'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title : 'Halaman About'});
});

module.exports = router;
