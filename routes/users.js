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
    let kata = req.query.kata;
    res.render('users', {
        title: 'Form',
        say: "Saya berkata : " + kata.toLowerCase()
    });
});



module.exports = router;
