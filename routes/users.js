var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function(req, res, next) {
  res.render("index.ejs")
  //res.send("------"+req.query.say);
  //res.send();
});

router.post("/", function(req, res, next){
  //res.redirect("/users")
  res.send(req.body.name.toLowerCase());
});




module.exports = router;
