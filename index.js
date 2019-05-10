const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");



mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoURI || keys.mongoURI, {
	useNewUrlParser:true
})











const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.set("json spaces", 20);


const PORT = process.env.NODE_ENV || 9000;


if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"));
	const path = require('path');
	app.get("*", (req,res)=>{
		res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
	})
}


app.listen(PORT,(req,res)=>{

	console.log('listening', PORT);

});