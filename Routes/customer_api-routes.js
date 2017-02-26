// require our model
var db = require('../models');

//Routes
module.exports = function (app) {
	app.get("/burger/customer", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Burger
    db.Customer.findAll({
      include: [db.Burger]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

app.get("/burgers/customer/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Customer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Burger]
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // POST route for returning posts of a specific category
  app.post('/burgers/customer', function(req, res){
  // Create a Customer with the data available to us in req.body
  db.Customer.create(req.body).then(function(dbCustomer){
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
  /*app.put("/burgers/update/:id", function(req, res) {
  	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

    db.Burger.update({'devoured': req.body.devoured},
    {
      where: {
        id: req.body.id
      }
    }
    ).then(function() {
      res.redirect('/burgers');
    })
  });*/

  app.put('/burgers/customer/:id', function(req, res){
  
  var condition = 'id : ' + req.params.id;

  console.log('condition ', condition);

  db.Customer.update({'customer_name': req.body.customer_name}, {where: {id: req.params.id}}).then(function(dbCustomer){
    res.redirect('/burgers');
  });
});

};