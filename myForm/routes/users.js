var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:say', function(req, res, next) {
  let input = req.params;
  res.json(input);
});

router.get('/', function(req, res) {
  let query = req.query;
  res.render('users', {title: "lowercaser",query: query.say, lowercased: null});
});

router.post('/', function(req,res) {
  let query = req.query.say;
  let sentence = (req.body.userInput).toLowerCase();
  res.render('users', {title: "lowercaser", query: query, lowercased: sentence});
});


module.exports = router;
