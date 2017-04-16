var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    db.User.findAll()
        .then(users => {
            res.render('index', {
                title: 'Express',
                users: users
            });
        })
        .catch(err => {
            console.log(err.message);
        })
});

router.post('/', (req, res, next) => {
    console.log(JSON.stringify(req.body, null, 2));
})

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'Test'
    })
    // res.send('ini halaman about')
})

module.exports = router;