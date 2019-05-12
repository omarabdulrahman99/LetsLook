const mongoose = require("mongoose");
const {Schema} = mongoose;
const RK = mongoose.Schema.ObjectId;
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
	username:String,
	fullname:String,
	email:String,
	profileimg:String,
	about:String,
	joindate:{type:Date, default:Date.now},
	onlinestatus:String,
	favimages:[{type:RK, ref:'Images'}],
	points:{type:Number,default:0}

});


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);