// require our burger model
var db = require('../models');

//RouteS
module.exports = function (app) {
	//Routers
app.get('/', function(req, res){
  res.redirect('/burgers')
});

  /// GET route for getting all of the burgers
  app.get("/burgers/", function(req, res) {
    db.Post.findAll({})
    .then(function(dbBurger) {
       res.redirect('/burgers');
    });
  });

  // Get route for returning posts of a specific category
  /*app.get("/burgers/create", function(req, res) {
    db.Burger.findAll({
      where: {
        burger_name: req.params.burger_name
      }
    })
    .then(function(dbBurger) {
      res.redirect('/burgers');
    });
  });*/

  app.post('/burgers/create', function(req, res){
  db.Burger.create({burger_name: req.body.burger_name,
  devour: req.body.devoured,
      
    }).then(function(data){
    res.redirect('/burgers')
  });
});

  
  // POST route for saving a new post
  /*app.post("/burgers/create", function(req, res){
  console.log(req.body);
  db.Burger.create({
    burger_name:req.body.burger_name
  }).then(function(dbBurger){
    res.redirect('/burgers')
  });
});*/


  // PUT route for updating posts
  app.put("/burgers/update/:id", function(req, res) {
  	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

    db.Burger.update({'devoured': req.body.devoured}, condition, function(dbBurger) {
      res.redirect('/Burger');
    });
  });
};