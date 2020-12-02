var express = require('express');
var router = express.Router();
var format = require('date-fns/format')

const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: format(new Date(), 'EEE h:mm')
  },
  {
    text: "Hello, World!",
    user: "Charles",
    added: format(new Date(), 'EEE h:mm')
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});
router.post('/new', function (req, res) {
  messages.push({text: req.body.message, user: req.body.name, added: format(new Date(), 'EEE h:mm')});
  res.redirect('/')
})

module.exports = router;
