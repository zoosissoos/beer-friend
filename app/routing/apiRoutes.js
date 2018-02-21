const path = require('path');
const users = require('../data/friend');

function apiRoutesList(app){

	///api request for data
	app.get("/api/:users?", function(req, res){
		res.json(users);;
	});

	//adding new user
	app.post("/api/new", function(req, res) {
		let user = req.body;
		let newUser = {
			nameUser: user.nameUser,
			photo: user.photo,
      preferences: user.preferences
    };

    //shows new user
    console.log(newUser);

		let newUserPref = newUser.preferences;

		let comp = [];

		//compares tastes against other users
		for(let k = 0;k <users.length; k++){
			let comppreferences = users[k].preferences;
			let calcDiff =[];
			for(let m=0; m < comppreferences.length; m++){
				calcDiff.push([parseInt(newUserPref[m]),comppreferences[m]]);
				calcDiff[m].sort(function(a, b) {
					return b - a;
				});
				calcDiff[m] = calcDiff[m].reduce(function(a,b){
					return (parseInt(a)-parseInt(b)); 
				});
			}
			calcDiff = calcDiff.reduce(function(a,b){
					return (parseInt(a) + parseInt(b)); 
				});
			console.log(calcDiff);
			comp.push(calcDiff);
		};

		//returns friend that matches with tastes
		let friendIndex = indexOfSmallest(comp);
		let friend = users[friendIndex];
		console.log(friend)

		//sends friend to client
		res.json(friend);

		//adds new user to data
		users.push(newUser);

	});

	//helper function to find index of smallest number in array
	function indexOfSmallest(a) {
	 return a.indexOf(Math.min.apply(Math, a));
	};

};


module.exports = apiRoutesList;