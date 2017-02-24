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
  app.get("/burgers/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
    //res.json(dbBurger);
    var hbsObject = {Burgers: dbBurger};

    console.log(hbsObject);

    res.render('index', hbsObject);
  });
  });
};