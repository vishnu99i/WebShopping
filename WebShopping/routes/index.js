var express = require('express');
var router = express.Router();

/* GET home page. */
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

  res.render('index', {products,admin:true});
});

module.exports = router;
