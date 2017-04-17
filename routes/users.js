var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('wooohooo ' + req.query.say);
// });
router.get('/', function(req, res, next) {
  res.render("index.ejs")
});
router.post("/", function(req, res, next){
  res.send(req.body.name.toLowerCase());
});
module.exports = router;
