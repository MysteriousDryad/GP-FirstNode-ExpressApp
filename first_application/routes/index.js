var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10},
    { name: 'Missouri', rating: 9},
    { name: 'Michigan', rating: 8},
    { name: 'Pennsylvannia', rating: 7},
    { name: 'Jamestown Ferry', rating: 9}
  ];
  var myname = "Jocelyn Fellows"

  res.render('index', {
    title: 'Favorite Places', 
    places: places,
    myname: myname
  })
});

module.exports = router;
