/*File name : index.js
  Author's name : Seol Cheon
  Student ID : 301113120
  Web site name : Seol Cheon
  date : Oct 09, 2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});  //it means in index.ejs, title should be express
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});  //it means in index.ejs, title should be express
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});  
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});  
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});  
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});  
});

module.exports = router;
