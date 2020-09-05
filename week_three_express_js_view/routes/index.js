var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Gebeya API',
     articles: [{
      id: 1,
      title: 'sample article',
      description: 'sample description'
    }] });
  // res.json()
});

module.exports = router;
