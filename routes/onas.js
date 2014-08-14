var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/onas', function(req, res) {
    res.render('onas');
});

module.exports = router;
