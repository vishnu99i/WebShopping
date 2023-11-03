var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/producthelpers')
const userHelpers = require('../helpers/userhelpers')

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

//Use signup data to database and the password will be in encrypted format
router.post('/signup',(req,res) => {
  userHelpers.doSignup(req.body).then((response) => {
    console.log(response);
  })
})

router.post('/login',(req,res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if(response.status){
      res.redirect('/')
    }
    else{
      res.redirect('/login')
    }
  })
})

module.exports = router;
