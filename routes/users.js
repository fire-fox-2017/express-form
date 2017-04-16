var express = require('express');
var router = express.Router();
var db = require('../models');

/* kalo method GET ngambil data pakai param atau query */
/* kalo method POST ngambil data pakai payload atau body parse */

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// POST localhost:3000/add
router.post('/add', (req, res, next) => {
    // mengambil data dari request post
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    // insert data dari form ke database
    db.User.create({
            'first_name': first_name,
            'last_name': last_name
        })
        .then(user => {
            // dialihkan ke localhost:3000/
            res.redirect('/');
        })
        .catch(err => {
            console.log(err.message);
        })
});

module.exports = router;