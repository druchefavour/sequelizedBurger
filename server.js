// Require the following npm packages inside of the server.js file:
		// express
		// body-parser
		// method-override
		
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory

app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Listen for response and log a message to the user upon success
app.listen(port, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", port, port); 
});;
