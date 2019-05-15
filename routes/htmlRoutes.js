var db = require("../models");

module.exports = app => {
	// index page 
	app.get('/', function(req, res) {
		res.render('pages/index');
	});
	// about page 
	app.get('/about', function(req, res) {
		res.render('pages/about');
	});
};