var express = require('express');
var router = express.Router();

//producthelpers
const productHelpers = require('../helpers/producthelpers');
var productHelper = require('../helpers/producthelpers');


/* GET users listing. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name: "Samsung S23 Ultra",
      category: "Mobile",
      description: "Latest Samsung Phone",
      image: "https://m.media-amazon.com/images/I/61imYpK33qL.jpg"
    },
    {
      name: "I phone 15 Pro Max",
      category: "Mobile",
      description: "Latest Apple Phone",
      image: "https://m.media-amazon.com/images/I/41lQuD3zXhL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "OnePlus 11R",
      category: "Mobile",
      description: "Latest OnePlus Phone",
      image: "https://m.media-amazon.com/images/I/41g1pQr8xUL._SX300_SY300_QL70_FMwebp_.jpg"
    },{
      name: "Nothing Phone2",
      category: "Mobile",
      description: "Latest Nothing Phone",
      image: "https://m.media-amazon.com/images/I/713rQyFyeXL._SX522_.jpg"
    }
  ]

  res.render('admin/viewproducts',{admin:true,products});

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

module.exports = router;
