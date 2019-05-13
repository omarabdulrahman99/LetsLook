const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports = app => {


	app.get("/api/current_user", (req, res) => {
	    res.send(req.user);
	  });



	app.post("/auth/login",
		passport.authenticate('local'),
		function(req,res){



		      res.send({user:req.user}); //zzz must fix later

		})


	app.get("/auth/logout", (req, res) => {
	    var envir = process.env.NODE_ENV || "dev";
	    var redir = "";
	    if (envir != "dev") {
	      redir = "/";
	    } else {
	      redir = "http://localhost:3000";
	    }

	    req.logout();
	    res.redirect(redir);
	  });



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