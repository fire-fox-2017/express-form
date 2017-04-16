var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.send(req.query.say)
  res.render('users');
});

router.post('/', function(req,res){
  res.send(req.body.user.toLowerCase());
})



module.exports = router;
