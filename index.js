const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

var LocalStrategy = require('passport-local').Strategy;
var User = require("./models/User");
require("./models/Images");
//require("./services/passport");



mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoURI || keys.mongoURI, {
	useNewUrlParser:true
})




const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));
app.use(passport.initialize());
app.use(passport.session());
app.set("json spaces", 20);


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require("./routes/authRoutes")(app);


const PORT = process.env.NODE_ENV || 9000;


if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"));
	const path = require('path');
	app.get("*", (req,res)=>{
		res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
	})
}


app.listen(PORT,()=>{

	console.log('listening', PORT);

});