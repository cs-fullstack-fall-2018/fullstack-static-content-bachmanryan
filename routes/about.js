var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.status(301).redirect("https://www.linkedin.com/in/ryan-bachman-555204171/")
});

module.exports = router;