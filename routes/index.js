var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: 'PROGRAM' });
});

router.get('/ofestiwalu', function(req, res) {
    res.render('ofestiwalu', { header: 'O FESTIWALU' });
});

router.get('/bilety', function(req, res) {
    res.render('bilety');
});

router.get('/kontakt', function(req, res) {
    res.render('kontakt');
});


module.exports = router;
