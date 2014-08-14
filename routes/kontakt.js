var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kontakt', function(req, res) {
    res.render('kontakt');
});

module.exports = router;
