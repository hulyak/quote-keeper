var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  const {
    source,
    attributed,
    quote
  } = req.body;
  res.render('index', {
    source,
    attributed,
    quote
  });
});



module.exports = router;