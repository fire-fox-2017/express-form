var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
res.render('users', {first: req.query.firstname,last: req.query.lastname})
  // res.send('respond with a resource');
});


// router.post('/:id/:id2', function (req,res,next) {
//   let params = req.params.id
//   let params2 = req.params.id2
//   res.render('users', {first: params, last: params2})
// })

module.exports = router;
