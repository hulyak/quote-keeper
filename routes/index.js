var express = require('express');
var router = express.Router();
const Quote = require('../models/quotes');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async (req, res) => {
  const {
    source,
    attributed,
    quote
  } = req.body;

  //  This creates a Quote instance every time the server receives a POST request to the root, called /.
  await Quote.create({quote, attributed, source});

  res.render('index', {
    source,
    attributed,
    quote
  });
});

module.exports = router;