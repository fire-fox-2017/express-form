var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.params.say);
	console.log("------")
	console.log(req.query);
	console.log("------")
	console.log(req.body);


	// var say = req.param('say');
	var say = req.query.say;

	let str = "";
	for (var x in req.query) {
	    
	        console.log(req.query[x]);
	        str += req.query[x] + " "

	}


  res.send(`${str}`);

});



router.post('/', function(req, res){
	console.log(req.body)
	
  var userText = req.body.userText;
  var html = 'toLowerCase: "' + userText.toLowerCase() + '".<br>' ;
  res.send(html);
});


module.exports = router;

