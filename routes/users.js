/*File name : user.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : Seol Cheon
  date : Oct 09, 2020 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
