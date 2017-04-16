var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', {
        title: 'Form',
        say: ''
    });
});

// router.get('/proses', function(req, res, next) {
//     let say = req.query.say;
//     res.render('users', {
//         title: 'Form',
//         say: say.toLowerCase()
//     });
// });

router.post('/proses', function(req, res, next) {
    let say = req.body.say;
    res.render('users', {
        title: 'Form',
        say: say.toLowerCase()
    });
});

module.exports = router;
