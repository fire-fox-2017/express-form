var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', {
        title: 'Form',
        say: ''
    });
});
router.get('/say', function(req, res, next) {
    let word = req.query.word;
    res.render('users', {
        title: 'Form',
        say: "I Say : " + word.toUpperCase()
    });
});


module.exports = router;
