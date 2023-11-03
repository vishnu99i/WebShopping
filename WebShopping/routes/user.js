var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/producthelpers')

/* GET home page. */
router.get('/', function(req, res, next) {

  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render('user/viewproducts',{admin: false,products});
  }) 
});

//User login
router.get('/login',(req,res) => {
  res.render('user/login')
})

//User signup
router.get('/signup',(req,res) => {
  res.render('user/signup')
})

module.exports = router;
