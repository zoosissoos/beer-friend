const path = require('path');


function htmlRoutesList(app){

	//sets rout for the survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//sets route for home as a catch-all
	app.get("/:home?", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

};

module.exports = htmlRoutesList;