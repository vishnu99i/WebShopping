var express = require('express');
var router = express.Router();

//producthelpers
const productHelpers = require('../helpers/producthelpers');
var productHelper = require('../helpers/producthelpers');


/* GET users listing. */
router.get('/', function(req, res, next) {

  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render('admin/viewproducts',{admin:true,products});
  })

});

  //To get add product page
  router.get('/addproduct',function(req,res){
      //To render the page
      res.render('admin/addproduct')
  })

  //Method post and database connections
  router.post('/addproduct',(req,res) => {
    console.log(req.body);
    console.log(req.files.image);

    productHelpers.addProduct(req.body,(id) => {

      //Storing images using ops array
      let image = req.files.image
      console.log(id)
      image.mv('./public/productimages/' + id + '.jpg',(err,done) => {
        if(!err){
          res.render("admin/addproduct")
        }
        else{
          console.log(err);
        }
      }) 
    })
  })

  router.get('/deleteproduct/',(req,res) => {
    //'/deleteproduct/:id
    //let proId = req.params.id
      let proId = req.query.id
      console.log(proId)
      console.log(req.query.name)
      productHelpers.deleteProduct(proId).then((response) => {
        res.redirect('/admin/')
      })
  })

  router.get('/editproduct/:id',async(req,res) => {
    let product = await productHelpers.getProductDetails(req.params.id)
    console.log(product)
    res.render('admin/editproduct',{product})//Passing product to the page
  })

module.exports = router;
