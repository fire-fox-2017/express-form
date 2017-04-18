var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{out:""})
  // res.send('respond with a resource');
});

router.get('/input', function(req, res, next){
  let output = `Result : ${(req.body.name).toLowerCase()}`;
  res.render('users', {out: output});
});

router.post('/input', function(req, res, next){
  let output = `Result : ${(req.body.name).toLowerCase()}`;
  res.render('users', {out: output});
});

module.exports = router;
