// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require('express');
// require our burger model
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
 /* app.get("/customer", function(req, res) {
    db.Customer.findAll({}).then(function(dbCustomer){
      //res.json(dbBurger);
    var hbsObject_1 = {Customer: dbCustomer};

    console.log(hbsObject_1);

    res.render('index_associate', hbsObject_1S);
    });
  });*/

    app.get("/burgers", function(req, res) {
    db.Burga.findAll({}).then(function(dbBurga){
      //res.json(dbBurger);
    var hbsObject = {Burga: dbBurga};

    console.log(hbsObject);

    res.render('index_associate', hbsObject);
    });
  });
    }
    
