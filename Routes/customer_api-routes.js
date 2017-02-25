// require our model
var db = require('../models');

//Routes
module.exports = function (app) {
	// Find all Customers and redirect to the home page
  app.get('/burgers/customers', function(req, res){
  db.Customer.findAll({}).then(function(dbcustomer) {
  res.redirect('/burgers');
});
});

// GET one customers id
app.get("/burgers/customers/:id", function(req, res) {
    // Find one Customer with the id in req.params.id and return them to the user with res.json
    db.Customer.findfindOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Get route for returning posts of a specific category
  app.post('/burgers/customers', function(req, res){
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