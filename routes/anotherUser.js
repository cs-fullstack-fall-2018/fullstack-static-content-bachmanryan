var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('usersindex', { title: 'Express' });
});

router.get('/userIndex', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/userindex'))
});

module.exports = router;