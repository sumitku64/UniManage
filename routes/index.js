var express = require('express');
var router = express.Router();
const path=require("path");
// app.use(express.static('public'));
const staticDir = path.join(__dirname, 'public');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/customer', function(req, res, next) {
  res.render('customer');
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});
router.get('/expance', function(req, res, next) {
  res.render('expance');
});
router.get('/help', function(req, res, next) {
  res.render('help');
});
router.get('/ledger', function(req, res, next) {
  res.render('ledger');
});
router.get('/report', function(req, res, next) {
  res.render('report');
});
router.get('/Notification', function(req, res, next) {
  res.render('tran_notifi');
});
router.get('/navbar', function(req, res, next) {
  res.render('navbar');
});

module.exports = router;
