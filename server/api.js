const express = require('express');
const router = express.Router();

const quotes = [
  'Great Scott!',
  'If you put your mind to it, you can achieve anything.',
  '1.21 Gigawats!',
  'May the force be with you.',
  'This is heavy, Doc.',
  "There's a rythmic ceremonial ritual coming up!",
];

router.get('/', function sendRep(req, res) {
  return res.json({ quotes });
});

router.patch('/', function updateQuotes(req, res) {
  quotes.unshift(req.body);
  console.log('PATCH req.body ===', req.body);
  return res.json({ quotes });
});

module.exports = router;
