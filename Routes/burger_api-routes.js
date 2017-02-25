// require our burger model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/burgers/burger", function(req, res) {
    var query = {};
    if (req.query.Customer_id) {
      query.CustomerId = req.query.Customer_id;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // Get route for retrieving a single Burger
  app.get("/burgers/burger/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      console.log(dbBurger);
      res.json(dbBurger);
    });
  });

  // POST route for saving a new post
  app.post("/burgers/burger", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting burgers
  app.delete("/burgers/burger/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating burgers
  /*app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};*/

//========================================
  app.put('/burgers/update/:id', function(req, res){
  var condition = 'id : ' + req.params.id;

  console.log('condition ', condition);

  db.Burger.update({'devoured': req.body.devoured}, {where: {id: req.params.id}}).then(function(dbBurger){
    res.redirect('/burgers');
  });
});

};