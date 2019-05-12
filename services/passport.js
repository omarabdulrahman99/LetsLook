const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const User = mongoose.model("User");




passport.serializeUser((user, done) => {
	//console.log('serialized');
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	//console.log('deserialized');
	User.findById(id).then(user => {
		done(null, user);
	});
});









passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false);}
      if(username == user.username){
        console.log("yesequal!")
      }
      return done(null, user);
    });
  }
));