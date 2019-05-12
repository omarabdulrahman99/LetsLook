const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = app => {



	app.post("/auth/login",
		passport.authenticate('local'),
		function(req,res){



		      res.send({user:req.user}); //zzz must fix later

		})


	app.post("/auth/signup", function(req,res){


		const fullname = req.body.fullname;
		const email = req.body.email;
		const username = req.body.username;
		const password = req.body.password;



		User.register(new User({username,email:email,fullname}), password, function(err,user) {
		    if (err) {
		      console.log('error while user register!', err);
		      return next(err);
		    }
	
		    console.log('user registered!')

		

		    res.send({user}); 



	})

})







}